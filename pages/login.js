import Head from "next/head";
import Image from "next/image";
import logo from "../assets/logo.svg";
import styles from "../styles/Home.module.css";
import { Input, Button, Text, Grid, Checkbox, Row } from "@nextui-org/react";
import { Mail } from "./components/Mail";
import { Password } from "./components/Password";
import Link from "next/link";
import { useFormik } from "formik";

export default function Home() {
  const { handleSubmit, handleReset, handleChange, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
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
          <div className={styles.logincard}>
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
                  aria-label="email"
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="Email"
                  contentLeft={<Mail fill="currentColor" />}
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
                  contentLeft={<Password fill="currentColor" />}
                  value={values.password}
                  onChange={handleChange}
                  name="password"
                />
              </Grid>
              <Row>
                <Checkbox size="xs" defaultSelected={false}>
                  Remember me
                </Checkbox>
              </Row>
              <Grid>
                <Button type="submit" className={styles.Continuebtn} auto>
                  Login
                </Button>
              </Grid>
            </form>
            <Grid className={styles.policylink}>
              <Text>
                Don’t have an account ?<Link href="/"> Signup</Link>
              </Text>
            </Grid>
          </div>
        </Grid>
      </div>
    </>
  );
}
