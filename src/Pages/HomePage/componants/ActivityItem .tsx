import React from 'react';

function ActivityItem(props: { name: string; backgroundColor: string; time: string; amount :string;icon:string}) {
  return (
    <div className="r-activity mb-3 bg-white rounded-4 p-2">
      <article className="d-flex flex-row justify-content-between">
        <div className="img-name d-flex flex-row mt-2">
          <i
            className={`${props.icon} r-icon d-flex justify-content-center align-items-center`}
            style={{
              fontSize: '25px',
              color: '#ffffff',
              backgroundColor: props.backgroundColor
            }}></i>
          <div className="name px-3 align-items-end">
            <h5 className="fs-5 fw-bold">{props.name}</h5>
            <h6 style={{ fontSize: '13px' }}>{props.time}</h6>
          </div>
        </div>
        <h5 className="fs-5 fw-bold d-flex align-items-center">
          <span>&euro;</span>
          {props.amount}
        </h5>
      </article>
    </div>
  );
}

export default ActivityItem;
