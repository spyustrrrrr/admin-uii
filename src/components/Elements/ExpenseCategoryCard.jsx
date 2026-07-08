import React from "react";
import Icon from "./Icon";

function ExpenseCategoryCard(props) {
  const { icon, category, amount, percentage, trend = "down", items = [] } = props;

  return (
    <div className="bg-white rounded-lg p-4 shadow-xl">
      <div className="flex items-center mb-3">
        <div className="bg-special-bg text-gray-02 p-3 rounded-lg mr-3">
          {icon || <Icon.Other />}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <span className="text-gray-02">{category}</span>
            <span
              className={`text-xs flex items-center ${
                trend === "up" ? "text-special-red" : "text-special-green"
              }`}
            >
              {percentage}%
              {trend === "up" ? (
                <Icon.ArrowUp size={14} />
              ) : (
                <Icon.ArrowDown size={14} />
              )}
            </span>
          </div>
          <div className="font-bold text-lg">${amount}</div>
          <div className="text-xs text-gray-03">Compare to the last month</div>
        </div>
      </div>

      <div className="border-t border-gray-05 pt-2">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between py-1 text-sm">
            <span>{item.name}</span>
            <div className="text-right">
              <div className="font-bold">${item.amount}</div>
              <div className="text-xs text-gray-03">{item.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseCategoryCard;