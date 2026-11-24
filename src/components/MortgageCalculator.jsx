import React, { useMemo } from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import './MortgageCalculator.css';

const MortgageCalculator = ({ calcState, setCalcState, onRequestPlan }) => {
  const { lang } = useLanguage();
  const t = translations[lang];

  const { price, downPercent, years, rate } = calcState;

  const results = useMemo(() => {
    const downAmount = (price * downPercent) / 100;
    const loanAmount = Math.max(price - downAmount, 0);
    const months = years * 12;

    let monthly = 0;
    if (months > 0) {
      if (rate === 0) {
        monthly = loanAmount / months;
      } else {
        const monthlyRate = rate / 100 / 12;
        monthly =
          (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, months))) /
          (Math.pow(1 + monthlyRate, months) - 1);
      }
    }

    const totalLoanPaid = monthly * months;
    const totalInterest = Math.max(totalLoanPaid - loanAmount, 0);
    const totalPayable = downAmount + totalLoanPaid;

    const downRatio = totalPayable > 0 ? (downAmount / totalPayable) * 100 : 0;
    const principalRatio = totalPayable > 0 ? (loanAmount / totalPayable) * 100 : 0;
    const interestRatio = totalPayable > 0 ? (totalInterest / totalPayable) * 100 : 0;

    return {
      downAmount,
      loanAmount,
      monthly,
      totalInterest,
      totalPayable,
      downRatio,
      principalRatio,
      interestRatio
    };
  }, [price, downPercent, years, rate]);

  const formatUSD = (val) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);

  const handleRequestPlan = () => {
    const summary =
      lang === 'ar'
        ? `طلب خطة سداد لعقار بقيمة ${formatUSD(price)} | مقدم ${downPercent}% (${formatUSD(results.downAmount)}) | مدة ${years} سنوات | قسط شهري تقديري ${formatUSD(results.monthly)}`
        : `Custom payment plan request for ${formatUSD(price)} property | ${downPercent}% Down (${formatUSD(results.downAmount)}) | ${years} Yrs @ ${rate}% | Est. Monthly: ${formatUSD(results.monthly)}`;
    onRequestPlan(summary);
  };

  return (
    <section id="calculator" className="calculator-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <i className="fas fa-calculator"></i>
            <span>{t.calculator.eyebrow}</span>
          </div>
          <h2 className="section-title">
            {t.calculator.titleStart} <span>{t.calculator.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{t.calculator.subtitle}</p>
        </div>

        <div className="calculator-wrapper glass-card">
          {/* Sliders Side */}
          <div className="calc-controls">
            <div className="calc-control-group">
              <div className="calc-label-row">
                <label htmlFor="calc-price">{t.calculator.propertyPrice}</label>
                <strong className="calc-value-badge">{formatUSD(price)}</strong>
              </div>
              <input
                id="calc-price"
                type="range"
                min={150000}
                max={4000000}
                step={25000}
                value={price}
                onChange={(e) => setCalcState((s) => ({ ...s, price: Number(e.target.value) }))}
              />
              <div className="range-bounds">
                <span>$150K</span>
                <span>$4.0M</span>
              </div>
            </div>

            <div className="calc-control-group">
              <div className="calc-label-row">
                <label htmlFor="calc-down">{t.calculator.downPayment}</label>
                <strong className="calc-value-badge">
                  {downPercent}% ({formatUSD(results.downAmount)})
                </strong>
              </div>
              <input
                id="calc-down"
                type="range"
                min={5}
                max={50}
                step={5}
                value={downPercent}
                onChange={(e) =>
                  setCalcState((s) => ({ ...s, downPercent: Number(e.target.value) }))
                }
              />
              <div className="range-bounds">
                <span>5%</span>
                <span>50%</span>
              </div>
            </div>

            <div className="calc-control-group">
              <div className="calc-label-row">
                <label htmlFor="calc-years">{t.calculator.loanTerm}</label>
                <strong className="calc-value-badge">
                  {years} {t.calculator.years}
                </strong>
              </div>
              <input
                id="calc-years"
                type="range"
                min={3}
                max={25}
                step={1}
                value={years}
                onChange={(e) => setCalcState((s) => ({ ...s, years: Number(e.target.value) }))}
              />
              <div className="range-bounds">
                <span>3 {t.calculator.years}</span>
                <span>25 {t.calculator.years}</span>
              </div>
            </div>

            <div className="calc-control-group">
              <div className="calc-label-row">
                <label htmlFor="calc-rate">{t.calculator.interestRate}</label>
                <strong className="calc-value-badge">{rate.toFixed(1)}%</strong>
              </div>
              <input
                id="calc-rate"
                type="range"
                min={0}
                max={12}
                step={0.5}
                value={rate}
                onChange={(e) => setCalcState((s) => ({ ...s, rate: Number(e.target.value) }))}
              />
              <p className="calc-hint">
                <i className="fas fa-circle-info"></i> {t.calculator.zeroRateHint}
              </p>
            </div>
          </div>

          {/* Results Summary Side */}
          <div className="calc-summary">
            <div className="calc-monthly-card">
              <span className="monthly-label">{t.calculator.monthlyPayment}</span>
              <div className="monthly-amount">
                <strong>{formatUSD(results.monthly)}</strong>
                <span>{t.calculator.perMonth}</span>
              </div>
            </div>

            {/* Stacked Visual Breakdown Bar */}
            <div className="calc-bar-wrap">
              <div className="calc-bar">
                <div
                  className="bar-seg seg-down"
                  style={{ width: `${results.downRatio}%` }}
                  title={t.calculator.downAmount}
                />
                <div
                  className="bar-seg seg-principal"
                  style={{ width: `${results.principalRatio}%` }}
                  title={t.calculator.loanAmount}
                />
                {results.interestRatio > 0 && (
                  <div
                    className="bar-seg seg-interest"
                    style={{ width: `${results.interestRatio}%` }}
                    title={t.calculator.totalInterest}
                  />
                )}
              </div>
            </div>

            <div className="calc-breakdown-grid">
              <div className="breakdown-item">
                <span className="dot dot-down"></span>
                <div>
                  <small>{t.calculator.downAmount}</small>
                  <strong>{formatUSD(results.downAmount)}</strong>
                </div>
              </div>
              <div className="breakdown-item">
                <span className="dot dot-principal"></span>
                <div>
                  <small>{t.calculator.loanAmount}</small>
                  <strong>{formatUSD(results.loanAmount)}</strong>
                </div>
              </div>
              <div className="breakdown-item">
                <span className="dot dot-interest"></span>
                <div>
                  <small>{t.calculator.totalInterest}</small>
                  <strong>{formatUSD(results.totalInterest)}</strong>
                </div>
              </div>
              <div className="breakdown-item">
                <span className="dot dot-total"></span>
                <div>
                  <small>{t.calculator.totalPayable}</small>
                  <strong>{formatUSD(results.totalPayable)}</strong>
                </div>
              </div>
            </div>

            <button type="button" className="btn btn-primary w-100" onClick={handleRequestPlan}>
              <i className="fas fa-paper-plane"></i>
              <span>{t.calculator.ctaBtn}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MortgageCalculator;
