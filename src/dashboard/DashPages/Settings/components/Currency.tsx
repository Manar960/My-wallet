import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';
import { useAppStore } from '../../../../context/app-store';
import img from '../../../../assets/images/Hero-Wrapper__image.png';

interface Currency {
  name: string;
  code: 'PS' | 'JD' | 'US';
  sign: string;
}

const CurrencyDropdown = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');

  const { setCurrency, setSign } = useAppStore();

  const currencies: Currency[] = [
    { name: 'Shekel', code: 'PS', sign: '₪' },
    { name: 'Jordan Dinar', code: 'JD', sign: 'د' },
    { name: 'USD', code: 'US', sign: '$' }
  ];

  const Language = [{ name: 'Arabic' }, { name: 'English' }];

  const flagUrls: { [key in Currency['code']]: string } = {
    PS: 'https://flagcdn.com/w20/ps.png',
    JD: 'https://flagcdn.com/w20/jo.png',
    US: 'https://flagcdn.com/w20/us.png'
  };

  const handleCurrencyChange = (event: { value: string }) => {
    const selectedCurrencyCode = event.value;
    const selectedCurrency = currencies.find((currency) => currency.code === selectedCurrencyCode);

    if (selectedCurrency) {
      setSelectedCurrency(selectedCurrencyCode);
      setCurrency(selectedCurrency.name);
      setSign(selectedCurrency.sign);
    }
  };
   const handleLanguageChange = (event: { value: string }) => {
     setSelectedLanguage(event.value);
   };
  return (
    <div className="mt-4 d-flex flex-column">
      <span>Choose Your Currency</span>
      <Dropdown
        id="currency"
        name="currency"
        placeholder="Currency"
        value={selectedCurrency}
        options={currencies.map((currency) => ({
          label: (
            <span className="d-flex align-items-center">
              <img
                src={flagUrls[currency.code]}
                alt={currency.name}
                style={{ width: '20px', height: '15px', objectFit: 'fill' }}
              />
              <span className="ps-3">[{currency.sign}] </span>
              <span className="ps-1">{currency.name}</span>
            </span>
          ),
          value: currency.code
        }))}
        onChange={handleCurrencyChange}
        className="my-2"
      />
      <span>Choose Your Language</span>
      <Dropdown
        id="Language"
        name="Language"
        placeholder="Language"
        value={selectedLanguage}
        options={Language.map((Language) => ({
          label: (
            <span className="d-flex align-items-center">
              <span className="ps-1">{Language.name}</span>
            </span>
          ),
          value: Language.name
        }))}
        onChange={handleLanguageChange}
        className="mt-2"
      />
      <div className="div">
        <img src={img} alt="v" />
      </div>
    </div>
  );
};

export default CurrencyDropdown;
