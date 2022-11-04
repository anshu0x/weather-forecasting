import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.svg";
import styles from "../styles/Home.module.css";
import { Text, Grid, Row } from "@nextui-org/react";
import Link from "next/link";
import emailverified from "../assets/emailverified.svg";
const verifyemail = () => {
  return (
    <>
      <div className={styles.gridcontainer}>
        <Grid>
          <div className={styles.verify}>
            <div className={styles.cardheader}>
              <Image alt="logo" width="100" src={logo} />
              <Text h5>Forcasting</Text>
            </div>
            <div className={styles.verifyemailbody}>
              <div className={styles.verifyemail}>
                <Image src={emailverified} alt="logo" />
                <Text b h3>
                  {" "}
                  Congratulations
                </Text>
              </div>
              <Grid>
                <Text h5 b className={styles.sverifyEmailtext}>
                  Your Account Created Succesfully
                </Text>
              </Grid>
            </div>
            <div className={styles.backtosignup}>
              <Link href="/"> {"<"} Back to Signup</Link>
            </div>
          </div>
        </Grid>
      </div>
    </>
  );
};

export default verifyemail;
