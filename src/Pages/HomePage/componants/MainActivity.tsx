import ActivityItem from './ActivityItem ';
const MainActivity = () => {
  return (
    <>
      <h6 style={{color: "#b5c1ce"}}>Today</h6>
      <ActivityItem
        name={'Supermarket'}
        backgroundColor={'#ff0691'}
        time={'10:36'}
        amount={'12.45'}
        icon={'fab fa-lyft'}
      />
      <ActivityItem
        name={'H&M'}
        backgroundColor={'#4285f4'}
        time={'10:36'}
        amount={'12.45'}
        icon={'fab fa-google'}
      />
    </>
  );
};

export default MainActivity;
