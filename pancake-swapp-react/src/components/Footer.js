import './Footer.scss';
import footerLogo from '../assets/icons/footer-logo.svg';
import twitter from '../assets/icons/twitter.svg';
import telegram from '../assets/icons/telegram.svg';
import redit from '../assets/icons/redit.svg';
import instagram from '../assets/icons/instagram.svg';
import github from '../assets/icons/github.svg';
import discord from '../assets/icons/discord.svg';
import medium from '../assets/icons/medium.svg';
import footerBtnRightArrow from '../assets/icons/header-btn-right-arrow.svg';
import ThemeSwitcher from './ThemeSwitcher';
import Currency from './Currency';
import FooterLang from './FooterLang';

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
                <FooterLang />
                <div id="footer-right">
                    <Currency />
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