import React, { useContext, useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CardExpensesComparison from "../components/Fragments/CardExpensesComparison";
import { expensesService } from "../services/dataService";
import { AuthContext } from "../context/authContext";
import AppSnackbar from "../components/Elements/AppSnackbar";

function expense() {
  const [expenses, setExpenses] = useState(null);
  const { logout } = useContext(AuthContext);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

const fetchExpenses = async () => {
  try {
    const data = await expensesService();

    console.log("Expenses :", data);

    setExpenses(data);
  } catch (err) {
    console.log(err);

    setSnackbar({
      open: true,
      message: "Gagal mengambil data expenses",
      severity: "error",
    });

    if (err.status === 401) {
      logout();
    }
  }
};

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <>
      <MainLayout>
        <CardExpensesComparison data={expenses} />
        <AppSnackbar
          open={snackbar.open}
          message={snackbar.message}
          severity={snackbar.severity}
          onClose={handleCloseSnackbar}
        />
      </MainLayout>
    </>
  );
}

export default expense;