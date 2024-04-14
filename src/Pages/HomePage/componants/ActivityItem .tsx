
interface Props {
  name: string;
  backgroundColor: string;
  time: string;
  amount: string;
  icon: string;
}

function ActivityItem({ name, backgroundColor, time, amount, icon }: Props) {
  return (
    <div className="r-activity mb-3 bg-white rounded-4 p-2">
      <article className="d-flex flex-row justify-content-between">
        <div className="img-name d-flex flex-row mt-2">
          <i
            className={`${icon} r-icon d-flex justify-content-center align-items-center`}
            style={{
              fontSize: '25px',
              color: '#ffffff',
              backgroundColor: backgroundColor
            }}></i>
          <div className="name px-3 align-items-end">
            <h5 className="fs-5 fw-bold">{name}</h5>
            <h6 style={{ fontSize: '13px' }}>{time}</h6>
          </div>
        </div>
        <h5 className="fs-5 fw-bold d-flex align-items-center">
          <span>&euro;</span>
          {amount}
        </h5>
      </article>
    </div>
  );
}

export default ActivityItem;
