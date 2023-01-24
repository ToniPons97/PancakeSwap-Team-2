import './Footer.scss';
import footerLogo from '../assets/icons/footer-logo.svg';
import twitter from '../assets/icons/twitter.svg';
import telegram from '../assets/icons/telegram.svg';
import redit from '../assets/icons/redit.svg';
import instagram from '../assets/icons/instagram.svg';
import github from '../assets/icons/github.svg';
import discord from '../assets/icons/discord.svg';
import medium from '../assets/icons/medium.svg';
import logoRound512 from '../Full Logo/icon-round-512.png';
import footerBtnRightArrow from '../assets/icons/header-btn-right-arrow.svg';
import ThemeSwitcher from './ThemeSwitcher';

const Footer = () => {
    return (
        <>
            <section id="footer">
                <div>
                    <ul>
                        <li>
                            <p>About</p>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">Brand</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Community</a>
                        </li>
                        <li>
                            <a href="#">Litepaper</a>
                        </li>
                        </ul>
                        <ul>
                        <li>
                            <p>Help</p>
                        </li>
                        <li>
                            <a href="#">Customer Support</a>
                        </li>
                        <li>
                            <a href="#">Troubleshooting</a>
                        </li>
                        <li>
                            <a href="#">Guides</a>
                        </li>
                        </ul>
                        <ul>
                        <li>
                            <p>Developers</p>
                        </li>
                        <li>
                            <a href="#">Github</a>
                        </li>
                        <li>
                            <a href="#">Documentation</a>
                        </li>
                        <li>
                            <a href="#">Bug Bounty</a>
                        </li>
                        <li>
                            <a href="#">Audits</a>
                        </li>
                        <li>
                            <a href="#">Careers</a>
                        </li>
                    </ul>
                    <img id="footer-logo" src={footerLogo} alt="" />
                    <div id="social-media">
                    <ul>
                        <li>
                            <a href="https://twitter.com/pancakeswap">
                                <img src={twitter} alt="Follow us on twitter." />
                            </a>
                        </li>
                        <li id="telegram">
                            <ul id="telegram-submenu">
                            <li>
                                <a href="https://t.me/pancakeswap">
                                English
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/PancakeSwapIndonesia">
                                Bahasa Indonesia
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/PancakeSwap_CN">
                                中文
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/PancakeSwapVN">
                                Tiếng Việt
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/pancakeswap_ita">
                                Italiano
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/pancakeswap_ru">
                                русский
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/pancakeswapturkiye">
                                Türkiye
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/PancakeSwapPortuguese">
                                Português
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/PancakeswapEs">
                                Español
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/pancakeswapjp">
                                日本語
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/pancakeswapfr">
                                Français
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/PancakeSwap_DE">
                                Deutsch
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/Pancakeswap_Ph">
                                Filipino
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/PancakeSwapGeorgia">
                                ქართული ენა
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/PancakeSwapINDIA">
                                हिन्दी
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/PancakeSwapAnn">
                                Announcements
                                </a>
                            </li>
                            </ul>
                            <img src={telegram} />
                        </li>
                        <li>
                        <a href="https://reddit.com/r/pancakeswap">
                            <img src={redit} alt="Follow our subredit." />
                        </a>
                        </li>
                        <li>
                        <a href="https://instagram.com/pancakeswap_official">
                            <img src={instagram} alt="Follow us on instagram" />
                        </a>
                        </li>
                        <li>
                        <a href="https://github.com/pancakeswap/">
                            <img src={github} alt="Check out our open source contributions." />
                        </a>
                        </li>
                        <li>
                        <a href="https://discord.gg/pancakeswap">
                            <img src={discord} alt="Join our discord server." />
                        </a>
                        </li>
                        <li>
                        <a href="https://medium.com/pancakeswap">
                            <img src={medium} alt="Find something to read on our medium blog." />
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
            </section>
            <section id="footer-bottom">
            <div id="checkbox-container">
                <ThemeSwitcher />
                <div id="footer-lang">

                <div id="lang-icons-wrapper">
                    <ul id="footer-langs">
                    <button value="AR">
                        العربية
                    </button>
                    <button value="BN">
                        বাংলা
                    </button>
                    <button value="EN">
                        English
                    </button>
                    <button value="DE">
                        Deutsch
                    </button>
                    <button value="EL">
                        Ελληνικά
                    </button>
                    <button value="ES-ES">
                        Español
                    </button>
                    <button value="FI">
                        Suomalainen
                    </button>
                    <button value="FIL">
                        Filipino
                    </button>
                    <button value="FR">
                        Français
                    </button>
                    <button value="HI">
                        हिंदी
                    </button>
                    <button value="HU">
                        Magyar
                    </button>
                    <button value="ID">
                        Bahasa Indonesia
                    </button>
                    <button value="IT">
                        Italiano
                    </button>
                    <button value="JA">
                        日本語
                    </button>
                    <button value="KO">
                        한국어
                    </button>
                    <button value="NL">
                        Nederlands
                    </button>
                    <button value="PL">
                        Polski
                    </button>
                    <button value="PT-BR">
                        Português (Brazil)
                    </button>
                    <button value="PT-PT">
                        Português
                    </button>
                    <button value="RO">
                        Română
                    </button>
                    <button value="RU">
                        Русский
                    </button>
                    <button value="SV">
                        Svenska
                    </button>
                    <button value="TA">
                        தமிழ்
                    </button>
                    <button value="TR">
                        Türkçe
                    </button>
                    <button value="UK">
                        Українська
                    </button>
                    <button value="VI">
                        Tiếng Việt
                    </button>
                    <button value="ZH-CN">
                        简体中文
                    </button>
                    <button value="ZH-TW">
                        繁體中文
                    </button>
                    </ul>
                    <svg viewBox="0 0 24 24" color="textSubtle" width="24px" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 
                        8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 
                        8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 
                        11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 
                        5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 
                        16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 
                        10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 
                        16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 
                        10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z">
                    </path>
                    </svg>
                    <p>EN</p>
                </div>
                </div>
                <div id="footer-right">
                <div>
                    <img src={logoRound512} alt="" />
                    <p>$4.003</p>
                </div>
                <button>
                    <p>Buy CAKE</p>
                    <img src={footerBtnRightArrow} alt="Right arrow." />
                </button>
                </div>
            </div>
            </section>
        </>
    );
}

export default Footer;