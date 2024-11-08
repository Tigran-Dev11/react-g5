 import s from "./home.module.scss";
 import { useDispatch, useSelector } from "react-redux";
 import { countSelector } from "../../libs/redux/counter-slice/selectors";
 import { counterActions } from "../../libs/redux/counter-slice";

 

 const Home = () => {

    const dispatch = useDispatch();
    const { count } = useSelector(countSelector);


    const increment = () => {
        dispatch(counterActions.incrementCount(10))
    }

    const decrement  = () => {
        dispatch(counterActions.decrementCount(1))
    }
    return(
        <div className={s.home}>
            <h2>COUNTER</h2>
            <div>{count}</div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}
export default Home;