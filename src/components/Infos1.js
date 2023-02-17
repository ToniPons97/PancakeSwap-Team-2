import { useEffect, useRef, useState } from 'react';
import './Infos1.scss';
import InfosDataBox from './InfosDataBox';

const Infos1 = () => {
    const [selection, setSelection] = useState(0);
    const category = ['Farms', 'Syrup Pools'];
    const currentSelection = category[selection];
    const loopFrom = new Array(5).fill(0);

    const intervalIdRef = useRef();

    const dataBoxTitles = {
        Farms: [
            "TWT-BNB LP",
            "KRS-BUSD LP",
            "XCAD-BUSD LP",
            "CO-BUSD LP",
            "ARV-BNB LP",
        ],
        'Syrup Pools': [
            "Stake CAKE",
            "Stake CAKE - Earn HOOP",
            "Stake CAKE - Earn CO",
            "Stake CAKE - Earn KRS",
            "Stake CAKE - Earn MGP",
        ]
    };

    const dataBoxPercentages = {
        Farms: ["199.050%", "188.301%", "179.283%", "162.717%", "153.702%"],
        "Syrup Pools": ["59.200%", "220.422%", "175.543%", "169.051%", "133.768%"],
    };

    const dataBoxTypes = {
        Farms: ['APR', 'APR', 'APR', 'APR','APR'],
        'Syrup Pools': ['APR', 'APY', 'APR', 'APR', 'APY']
    }

    const handleClick = () => {
        setSelection(prev => ++prev % 2);
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = startInterval();
    };

    const startInterval = () => {
        return setInterval(() => {
            setSelection(prev => ++prev % 2);
        }, 5000);
    }


    useEffect(() => {
        intervalIdRef.current = startInterval();

        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, []);
    
    return (
        <section id="infos-1">
            <div>
                <div id="infos-1-title-container">
                    <h2>Top
                        <span id="category"> {currentSelection}</span>
                    </h2>
                    <button onClick={handleClick} id="up-down-button">
                        <svg id="up-down-arrow" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 
                        17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 
                        15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 
                        3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 
                        6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 
                        13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 
                        3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z">
                            </path>
                        </svg>
                    </button>
                </div>

                <div id="trade-data-container">
                    {
                        loopFrom.map((el, i) => {
                            return <InfosDataBox
                                key={i}
                                boxTitle={dataBoxTitles[currentSelection][i]}
                                boxPercentage={dataBoxPercentages[currentSelection][i]}
                                boxType={dataBoxTypes[currentSelection][i]}
                            />
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Infos1;