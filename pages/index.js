import Head from "next/head";
import Image from "next/image";
import logo from "../assets/logo.svg";
import styles from "../styles/Home.module.css";
import { Input, Button, Text, Grid } from "@nextui-org/react";
import { Mail } from "./components/Mail";
import { Password } from "./components/Password";
import Link from "next/link";
import { useFormik } from "formik";

export default function Home() {
  const { handleSubmit, handleReset, handleChange, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      phone: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <Head>
        <title>Weather Forcasting</title>
        <meta name="description" content="Weather Forcasting" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.gridcontainer}>
        <Grid>
          <div className={styles.card}>
            <div className={styles.cardheader}>
              <Image alt="logo" src={logo} width="100" />
              <Text h5>Forcasting</Text>
              <Text css={{ color: "#808080" }}>
                Enter your email address and password
              </Text>
            </div>
            <form onSubmit={handleSubmit} className={styles.signupform}>
              <Grid>
                <Input
                  aria-label="name"
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="Full Name"
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid>
                <Input
                  aria-label="tel"
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="Phone Number"
                  type="tel"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                />
              </Grid>
              <Grid>
                <Input
                  aria-label="tel"
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="Country"
                  type="tel"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                />
              </Grid>
              <Grid>
                <Input
                  aria-label="email"
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid>
                <Input.Password
                  aria-label="password"
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  name="password"
                />
              </Grid>
              <Grid>
                <Button type="submit" className={styles.Continuebtn} auto>
                  Continue
                </Button>
              </Grid>
            </form>
            <Grid className={styles.policylink}>
              <Text weight={"light"}>
                By registering you agree to the Forcasting.{" "}
                <Link href="/verify">Terms of Use</Link> {""}
                and <Link href="/verify">Privacy Policy.</Link>
              </Text>
            </Grid>
            <Grid className={styles.policylink}>
              <Text>
                Already have an Account ? {""}
                <Link href="/login">Login</Link>
              </Text>
            </Grid>
          </div>
        </Grid>
      </div>
    </>
  );
}
