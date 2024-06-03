"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import { useEffect, useState } from "react";

type Target = "#menu" | "#franchise" | "#inquiry";

const TARGET_EL = ["#menu", "#franchise", "#inquiry"];

const Header = () => {
  const [current, setCurrent] = useState<Target | null>(null);
  const [visibleMobileMenu, setVisibleMobileMenu] = useState<boolean>(false);

  const handleResize = () => {
    if (window.innerWidth >= 992) {
      setVisibleMobileMenu(false);
    }
  };

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;

    for (let i = TARGET_EL.length - 1; i >= 0; i--) {
      const el: HTMLElement | null = document.querySelector(TARGET_EL[i]);

      if (el && scrollTop >= el.offsetTop) {
        setCurrent(TARGET_EL[i] as Target);
        return;
      }
    }

    setCurrent(null);
  };

  const handleVisibleMobileMenu = () => {
    setVisibleMobileMenu(!visibleMobileMenu);
  };

  const handleSection = (target: Target | null) => {
    setCurrent(target);

    if (!target) {
      window.scrollTo(0, 0);
      return;
    }

    const el = document.querySelector(target);
    el?.scrollIntoView();
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className={styles.logo}
            />
          </Link>
          <ul className={styles.menu}>
            <li>
              <span
                className={`${!current ? "active" : ""}`}
                onClick={() => {
                  handleSection(null);
                }}
              >
                금숙씨1972
              </span>
            </li>
            <li>
              <span
                className={`${current === "#menu" ? "active" : ""}`}
                onClick={() => {
                  handleSection("#menu");
                }}
              >
                메뉴소개
              </span>
            </li>
            <li>
              <span
                className={`${current === "#franchise" ? "active" : ""}`}
                onClick={() => {
                  handleSection("#franchise");
                }}
              >
                창업안내
              </span>
            </li>
            <li>
              <span
                className={`${current === "#inquiry" ? "active" : ""}`}
                onClick={() => {
                  handleSection("#inquiry");
                }}
              >
                창업문의
              </span>
            </li>
          </ul>
          <div className={styles.side}>
            <span
              className={`${styles.inquiry} animate__animated animate__pulse animate__slower animate__infinite`}
              onClick={() => {
                handleSection("#inquiry");
              }}
            >
              가맹문의
            </span>
            <button
              type="button"
              className={styles.hamburger}
              onClick={handleVisibleMobileMenu}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${styles.mobileMenu} ${visibleMobileMenu ? "show" : ""}`}
      >
        <ul>
          <li>
            <span
              onClick={() => {
                handleSection(null);
                setVisibleMobileMenu(false);
              }}
              className={`${!current ? "active" : ""}`}
            >
              금숙씨1972
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                handleSection("#menu");
                setVisibleMobileMenu(false);
              }}
              className={`${current === "#menu" ? "active" : ""}`}
            >
              메뉴소개
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                handleSection("#franchise");
                setVisibleMobileMenu(false);
              }}
              className={`${current === "#franchise" ? "active" : ""}`}
            >
              창업안내
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                handleSection("#inquiry");
                setVisibleMobileMenu(false);
              }}
              className={`${current === "#inquiry" ? "active" : ""}`}
            >
              창업문의
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
