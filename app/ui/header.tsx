"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import { useEffect, useState } from "react";

const Header = () => {
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
              <Link href="/">금숙씨1972</Link>
            </li>
            <li>
              <Link href="#menu">메뉴소개</Link>
            </li>
            <li>
              <Link href="#franchise">창업안내</Link>
            </li>
            <li>
              <Link href="#inquiry">창업문의</Link>
            </li>
          </ul>
          <div className={styles.side}>
            <a href="/" className={styles.inquiry}>
              가맹문의
            </a>
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
            <Link href="/">금숙씨1972</Link>
          </li>
          <li>
            <Link href="#menu">메뉴소개</Link>
          </li>
          <li>
            <Link href="#franchise">창업안내</Link>
          </li>
          <li>
            <Link href="#inquiry">창업문의</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
