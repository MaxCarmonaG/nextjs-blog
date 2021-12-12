import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import Notification from "../../UI/Notification";
import styles from "./ContactForm.module.css";

type Data = {
  email: string;
  name: string;
  message: string;
};

const sendContactData = async (contactData: Data) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactData),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
};

const ContactForm: FC = () => {
  const [requestStatus, setRequestStatus] = useState("");
  const [requestError, setRequestError] = useState("");
  const [formData, setFormData] = useState<Data>({
    email: "",
    name: "",
    message: "",
  });

  const onChangeInputHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));

  const sendMessageHandler = async (event: FormEvent) => {
    event.preventDefault();
    setRequestStatus("pending");

    try {
      await sendContactData(formData);
      setRequestStatus("success");
      setFormData({ email: "", name: "", message: "" });
    } catch (error: any) {
      setRequestStatus("error");
      setRequestError(error.message);
    }
  };

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus("");
        setRequestError("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form} onSubmit={sendMessageHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={onChangeInputHandler}
              value={formData.email}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={onChangeInputHandler}
              value={formData.name}
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            onChange={onChangeInputHandler}
            value={formData.message}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </section>
  );
};

export default ContactForm;
