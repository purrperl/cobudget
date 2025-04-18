function getInitialTree() {
    return [
        { id: 1, parent_id: null, budget_allocation: 100, name: "National Budget" },
        { id: 2, parent_id: 1, budget_allocation: 50, name: "Department of Education" },
        { id: 3, parent_id: 1, budget_allocation: 30, name: "Department of Health" },
        { id: 4, parent_id: 1, budget_allocation: 20, name: "Department of Energy" },
        { id: 5, parent_id: 2, budget_allocation: 60, name: "Primary Education" },
        { id: 6, parent_id: 2, budget_allocation: 40, name: "Higher Education" },
        { id: 7, parent_id: 3, budget_allocation: 70, name: "Public Hospitals" },
        { id: 8, parent_id: 3, budget_allocation: 30, name: "Medical Research" }
    ];
}

