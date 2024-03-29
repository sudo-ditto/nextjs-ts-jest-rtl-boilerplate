import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { Button } from 'antd';

import styles from '../assets/styles/scss/main.module.scss';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { decrement, increment, selectCount } from '../store/reducers/counterSlice';

const Home: NextPage = () => {
    const dispatch = useAppDispatch();
    const count = useAppSelector(selectCount);

    const handleIncrementValue = () => {
        dispatch(increment());
    };

    const handleDecrementValue = () => {
        dispatch(decrement());
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <p className={styles.description}>
                    Get started by editing{' '}
                    <code className={styles.code} style={{ color: styles.primaryColor }}>
                        pages/index.tsx
                    </code>
                </p>

                <p className={styles.description}>Redux Toolkit Test </p>

                <div>
                    <button className={styles.card} onClick={handleIncrementValue}>
                        +
                    </button>
                    <code className={styles.code} style={{ color: styles.primaryColor }}>
                        {count}
                    </code>
                    <button className={styles.card} onClick={handleDecrementValue}>
                        -
                    </button>
                </div>
                <div className={styles.antd}>
                    <p>Ant Design Button:</p>
                    <Button type="primary">Primary Button</Button>
                </div>

                <div className={styles.grid}>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h2>Documentation &rarr;</h2>
                        <p>Find in-depth information about Next.js features and API.</p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h2>Learn &rarr;</h2>
                        <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </a>

                    <a href="https://github.com/vercel/next.js/tree/canary/examples" className={styles.card}>
                        <h2>Examples &rarr;</h2>
                        <p>Discover and deploy boilerplate example Next.js projects.</p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                    >
                        <h2>Deploy &rarr;</h2>
                        <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
                    </a>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    );
};

export default Home;
