import './PhishingWarning.scss';
import phishingBunny from '../assets/images/phishing-warning/phishing-warning-bunny.webp';
import phishingWarning from '../assets/icons/phishing-warning.svg';
import { useScrollDirection } from './Hooks/useScrollDirection';

const PhishingWarning = ({phishingWarningState}) => {
    const {showWarning, setShowWarning} = phishingWarningState;
    const handleWarningDisplay = () => setShowWarning(false);

    const scrollDirection = useScrollDirection();
    
    return (    
        showWarning &&
        <section className={scrollDirection === 'down' ? 'hide-warning' : 'show-warning'} id="phishing-warning">
        <img id="phishing-bunny" src={phishingBunny}
          alt="Phishing warning bunny." />
        <div>
          <span>PHISHING WARNING:</span>
          <p>please make sure you're visiting</p>
          <span id="url">https://pancakeswap.finance</span>
          <p> - check the URL carefully.</p>
        </div>
        <button onClick={handleWarningDisplay}>
          <img src= {phishingWarning}
            alt="Phishing warning close button." />
        </button>
      </section>
      
    );
}

export default PhishingWarning;