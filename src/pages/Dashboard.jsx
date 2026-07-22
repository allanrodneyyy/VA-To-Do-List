import '../App.css'
import { Header } from "../components/Header";
import { DashboardBoxes } from '../components/DashboardBoxes';

export function Dashboard({ theme, setTheme }) {
  return (
    <>
      <Header theme={theme} setTheme={setTheme} />

      <section className='p-5 flex flex-col gap-5'>
        <div className='' >
          <p className='text-2xl font-bold'>Dashboard</p>
          <p className=' text-gray-500'>
            Welcome back! Here's your overview.
          </p>
        </div>

        <DashboardBoxes />

      </section>

    </>


  );
}