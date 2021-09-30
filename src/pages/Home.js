import Header from '../components/layout/Header';
import Button from '../components/Button/Button';
import { useContext } from 'react';
import AppContext from '../context/appContext';

const Home = () => {
    const ctx = useContext(AppContext)
    return (
        <div className="page-wrapper">
            <main className="home">
                <div className="header">
                    <Header title={ctx.info.home.title} subtitle={ctx.info.home.sub_title} />
                </div>
                <div className="text">
                    <p className="text">{`Site text`}</p>
                </div>
                <Button
                    icon={ctx.info.home.button.icon}
                    btn_text={ctx.info.home.button.btn_text}
                    type={ctx.info.home.button.type}
                />
            </main>
        </div>
    )
}

export default Home
