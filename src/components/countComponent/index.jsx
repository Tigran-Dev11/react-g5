import s from "./counter.module.scss"

export const CountComponent = () => {



  return (
    <div className={s.counterPlace}>
      <div className={s.counter}>
        <div className={s.display}>
          <input type="text"  />
          <button className={s.tools}>=</button>
        </div>
        <div className={s.calcBottom}>
          <button>AC</button>
          <button>C</button>
          <button>.</button>
          <button className={s.tools}>*</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className={s.tools}>+</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button className={s.tools}>-</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className={s.tools}>/</button>
          <button>0</button>
        </div>
      </div>
    </div>
  );
};
