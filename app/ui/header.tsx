"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import { useEffect, useState } from "react";

type Target = "#menu" | "#franchise" | "#inquiry";

const Header = () => {
  const [target, setTarget] = useState<Target | null>(null);
  const [visibleMobileMenu, setVisibleMobileMenu] = useState<boolean>(false);

  const handleResize = () => {
    if (window.innerWidth >= 992) {
      setVisibleMobileMenu(false);
    }
  };

  const handleVisibleMobileMenu = () => {
    setVisibleMobileMenu(!visibleMobileMenu);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!target) {
      window.scrollTo(0, 0);
      return;
    }

    const el = document.querySelector(target);
    el?.scrollIntoView();
  }, [target]);

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
                className={`${!target ? "active" : ""}`}
                onClick={() => {
                  setTarget(null);
                }}
              >
                금숙씨1972
              </span>
            </li>
            <li>
              <span
                className={`${target === "#menu" ? "active" : ""}`}
                onClick={() => {
                  setTarget("#menu");
                }}
              >
                메뉴소개
              </span>
            </li>
            <li>
              <span
                className={`${target === "#franchise" ? "active" : ""}`}
                onClick={() => {
                  setTarget("#franchise");
                }}
              >
                창업안내
              </span>
            </li>
            <li>
              <span
                className={`${target === "#inquiry" ? "active" : ""}`}
                onClick={() => {
                  setTarget("#inquiry");
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
                setTarget("#inquiry");
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
                setTarget(null);
                setVisibleMobileMenu(false);
              }}
              className={`${!target ? "active" : ""}`}
            >
              금숙씨1972
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                setTarget("#menu");
                setVisibleMobileMenu(false);
              }}
              className={`${target === "#menu" ? "active" : ""}`}
            >
              메뉴소개
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                setTarget("#franchise");
                setVisibleMobileMenu(false);
              }}
              className={`${target === "#franchise" ? "active" : ""}`}
            >
              창업안내
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                setTarget("#inquiry");
                setVisibleMobileMenu(false);
              }}
              className={`${target === "#inquiry" ? "active" : ""}`}
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
