import Image from "next/image";
import { useEffect, useState } from "react";
import { ContactsData } from "../../core/types";
import IconButton from "../icon-button";
import styles from "./styles.module.scss";

import Chat from "../../../public/chat-copy.svg";

interface Props {
  data: ContactsData;
}

const ContactsTab: React.FC<Props> = ({ data }) => {
  const [contacts, setContacts] = useState([...data.contacts]);

  useEffect(() => {
    Promise.all(
      contacts.map(async (contact) => {
        return await fetch("https://random.imagecdn.app/42/42").then((res) => ({
          ...contact,
          avatar: res.url,
        }));
      })
    ).then(setContacts);
  }, [data]);

  return (
    <div className={styles["contacts-tab"]}>
      {contacts.map(({ fullname, avatar, position }, index) => {
        return (
          <div key={fullname} className={styles.contact}>
            {avatar && (
              <Image
                src={avatar}
                width={42}
                height={42}
                layout="fixed"
                alt=""
              />
            )}
            <div className={styles.info}>
              <div className={styles.fullname}>{fullname}</div>
              <div className={styles.position}>{position}</div>
            </div>
            <IconButton renderIcon={() => <Chat />} />
          </div>
        );
      })}
    </div>
  );
};

export default ContactsTab;
