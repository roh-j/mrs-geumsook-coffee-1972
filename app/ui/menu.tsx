"use client";

import Image from "next/image";
import styles from "./menu.module.css";
import { MENU_CATEGORY, MENU_ITEMS, MenuCategory } from "../constants/menu";
import { useState } from "react";

const Menu = () => {
  const [category, setCategory] = useState<MenuCategory>("ALL");
  const [pagination, setPagination] = useState<number>(8);

  const handleCategory = (newCategory: MenuCategory) => {
    setCategory(newCategory);
    setPagination(8);
  };

  const handlePagination = (newPagination: number) => {
    setPagination(newPagination);
  };

  return (
    <div id="menu" className={styles.wrapper}>
      <div className={styles.container}>
        <h3 data-aos-offset="200" data-aos="fade-up">
          추천메뉴
        </h3>
        <ul className={styles.bestItems}>
          <li data-aos-offset="200" data-aos="fade-up">
            <div
              className={`${styles.sticker} animate__animated animate__pulse animate__infinite`}
            >
              BEST
            </div>
            <div style={{ width: "100%", aspectRatio: 1 }}>
              <Image
                src="/menu-best-americano.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <h5>아메리카노</h5>
          </li>
          <li data-aos-offset="200" data-aos="fade-up">
            <div
              className={`${styles.sticker} animate__animated animate__pulse animate__infinite`}
            >
              BEST
            </div>
            <div style={{ width: "100%", aspectRatio: 1 }}>
              <Image
                src="/menu-best-pomegranate-iced-tea.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <h5>아메리카노</h5>
          </li>
          <li data-aos-offset="200" data-aos="fade-up">
            <div
              className={`${styles.sticker} animate__animated animate__pulse animate__infinite`}
            >
              BEST
            </div>
            <div style={{ width: "100%", aspectRatio: 1 }}>
              <Image
                src="/menu-best-chamomile-tea.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <h5>아메리카노</h5>
          </li>
        </ul>
        <div
          data-aos-offset="200"
          data-aos="zoom-in"
          className={styles.selection}
        >
          <ul>
            {MENU_CATEGORY.map((row, index) => (
              <li
                key={index}
                onClick={() => {
                  handleCategory(row.category as MenuCategory);
                }}
              >
                {category === row.category ? (
                  <i className="fa-solid fa-square-check"></i>
                ) : (
                  <i className="fa-regular fa-square"></i>
                )}{" "}
                {row.name}
              </li>
            ))}
          </ul>
        </div>
        <ul className={styles.items}>
          {MENU_ITEMS.filter(
            (row) => category === "ALL" || row.category === category
          )
            .slice(0, pagination)
            .map((row, index) => (
              <li key={index} data-aos-offset="200" data-aos="fade-up">
                <div style={{ width: "100%", aspectRatio: 1 }}>
                  <Image
                    key={row.src}
                    src={row.src}
                    alt={row.name}
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <h5>{row.name}</h5>
              </li>
            ))}
        </ul>
        <p>
          <button
            type="button"
            className={styles.button}
            onClick={() => {
              handlePagination(pagination + 8);
            }}
            disabled={
              MENU_ITEMS.filter(
                (row) => category === "ALL" || row.category === category
              ).length <= pagination
            }
          >
            + MORE
          </button>
        </p>
      </div>
    </div>
  );
};

export default Menu;
