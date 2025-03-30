import React from "react";
import { HeaderTop } from "./header-top";
import Logo from "@img/logo.svg?react";
import { Modal } from "antd";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const data = { name, email, message };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyTmVFQ94XOUz3MQ1sO9--5E_aLgGSJR_nJTkkuLCB4AS7LSyndRaBiJVZ0onTofYdKOg/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      if (result.status === "success") {
        handleCancel();
        alert('success');
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    }
  };


  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    document.querySelector(".hamburger")?.classList.toggle("is-active");
  };

  return (
    <header className="header">
      <HeaderTop />
      <div className="header-content">
        <Logo className="header-content__logo" />

        <ul className={`header-content-menu ${isMenuOpen ? "header-menu--mobile" : ""}`}>
          <a href="#fam" className="header-content-menu__item">Our Practice</a>
          <a href="#doc" className="header-content-menu__item">Treatment</a>
          <a href="#help" className="header-content-menu__item">Patient Resources</a>
          <a href="#loc" className="header-content-menu__item">Contact us</a>
        </ul>
        <button className="header-content-form__button" onClick={showModal}>
          Complimentary Exam
        </button>
        <div className="hamburger" onClick={handleMenuToggle}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      </div>
      <Modal
        title="Complimentary Exam"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form className="header-content-form" onSubmit={handleSubmit}>
          <input
            className="header-content-form__input"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="header-content-form__input"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="header-content-form__textarea"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button className="header-content-form__buttonSubmit" type="submit">Submit</button>
        </form>
      </Modal>
    </header>
  );
};
