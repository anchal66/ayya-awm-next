import classes from './silder.module.css';

const Slider = () => {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.slide}>
            <div className={classes.imgContainer}>
              <img className={classes.img} src="https://i.ibb.co/cXFnLLV/3.png" alt="helllo" />
            </div>
            <div className={classes.infoContainer}>
              <h2 className={classes.title}>Hello</h2>
              <p className={classes.desc}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                ducimus dolorem sit in unde repellat sint, dolore enim iure quam
                a voluptate minus aspernatur alias culpa non vel aliquid quod.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
