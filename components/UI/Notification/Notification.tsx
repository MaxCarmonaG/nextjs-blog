import { FC } from "react";
import ReactDOM from "react-dom";
import styles from "./Notification.module.css";

interface Props {
  title: string;
  message: string;
  status: string;
}

const Notification: FC<Props> = ({ title, message, status }) => {
  let statusClasses = "";

  if (status === "success") {
    statusClasses = styles.success;
  }

  if (status === "error") {
    statusClasses = styles.error;
  }

  const cssClasses = `${styles.notification} ${statusClasses}`;

  const element = document.getElementById("notifications");

  return (
    element &&
    ReactDOM.createPortal(
      <div className={cssClasses}>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>,
      element
    )
  );
};

export default Notification;
