import React from "react";
import ExpenseCategoryCard from "../Elements/ExpenseCategoryCard";
import Icon from "../Elements/Icon";
import CircularProgress from "@mui/material/CircularProgress";

const categoryIcons = {
  Housing: <Icon.House />,
  Food: <Icon.Food />,
  Transportation: <Icon.Transport />,
  Entertainment: <Icon.Gamepad />,
  Shopping: <Icon.Shopping />,
  Others: <Icon.Other />,
};

function CardExpensesComparison(props) {
  const { data } = props;
  const isLoading = data === null;

    

  return (
    <div>
      <div className="text-gray-02 text-2xl mb-4">Expenses Comparison</div>

      {isLoading ? (
        <div className="flex flex-col justify-center items-center h-64 text-primary">
          <CircularProgress color="inherit" size={50} enableTrackSlot />
          Loading Data
        </div>
      ) : (
        <div className="grid sm:grid-cols-3 gap-4">
          {data.map((category) => (
            <ExpenseCategoryCard
              key={category.id || category.category}
              icon={categoryIcons[category.category]}
              category={category.category}
              amount={category.amount}
              percentage={category.percentage}
              trend={category.trend}
              items={category.items}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CardExpensesComparison;