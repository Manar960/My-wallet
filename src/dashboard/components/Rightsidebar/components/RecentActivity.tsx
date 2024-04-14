import nike from '../../../../assets/images/nike.png'
const RecentActivity = () => {
  const activities = [
    { icon: 'fab fa-lyft', name: 'Lyft', date: '28 Oct 2020', amount: '$12.45', color: '#ff0691' },
    {
      icon: '../../../../assets/images/nike.png',
      name: 'Nike store',
      date: '28 Oct 2020',
      amount: '$12.45'
    },
    {
      icon: 'fab fa-google',
      name: 'Google',
      date: '28 Oct 2020',
      amount: '$12.45',
      color: '#4285f4'
    },
    { icon: 'fab fa-lyft', name: 'Lyft', date: '27 Oct 2020', amount: '$12.45', color: '#ff0691' }
  ];

  return (
    <section className="activity p-4 mt-2 d-flex flex-column">
      <h6 className="mb-4">Recent Activity</h6>
      {activities.map((activity, index) => (
        <div key={index} className=" mb-3">
          <article className="d-flex flex-row justify-content-between">
            <div className="img-name d-flex flex-row">
              {activity.icon.includes('../../../../assets/images') ? (
                <img
                  src={nike}
                  alt=""
                  className="r-icon d-flex justify-content-center align-items-center p-2"
                />
              ) : (
                <i
                  className={
                    activity.icon + ' r-icon d-flex justify-content-center align-items-center'
                  }
                  style={{ fontSize: '25px', color: activity.color }}></i>
              )}
              <div className="name px-3 align-items-end">
                <h5 className="fs-6">{activity.name}</h5>
                <h6 style={{ fontSize: '12px' }}>{activity.date}</h6>
              </div>
            </div>
            <h5 className="fs-6 d-flex align-items-end">{activity.amount}</h5>
          </article>
        </div>
      ))}
    </section>
  );
};

export default RecentActivity;
