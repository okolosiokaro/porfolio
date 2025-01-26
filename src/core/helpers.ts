export const isNumeric = (str: string) => {
  return /^\d+$/.test(str);
};

export const numbersOnly = (e: any) => {
  if (isNaN(e?.key) && e?.key !== "Backspace") {
    e.preventDefault();
  }
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const monthName = date.toLocaleString("default", { month: "short" });

  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();

  return `${monthName} ${day}, ${year}`;
};

export const isObjectEmpty = (obj: any) => {
  if (obj === null) return true;
  return Object.keys(obj).length === 0;
};

export const formatCurrency = (value: any) => {
  if (value) {
    let val = value;
    val = val ? parseFloat(val).toFixed(2) : 0.0;
    return val === 0 ? "₦ 0.00" : `₦ ${Number(val).toLocaleString("en-US")}`;
  }

  return "₦ 0.00";
};

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const scrollWindowToTop = () => {
  try {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  } catch (error) {
    window.scrollTo(0, 0);
  }
};

export const cx = (...classNames: string[]) =>
  classNames.filter(Boolean).join(" ");

export const filterProductQuery = (
  query: ProductQuery,
): Partial<ProductQuery> => {
  const filteredQuery: any = {};

  // Iterate through each key-value pair in the query object
  Object.entries(query).forEach(([key, value]) => {
    const typedKey = key as keyof ProductQuery;

    // Only add to filteredQuery if the value is a non-empty string, a true boolean, or a number
    if (
      (typeof value === "string" && value !== "") ||
      (typeof value === "boolean" && value === true) ||
      typeof value === "number"
    ) {
      filteredQuery[typedKey] = value as ProductQuery[typeof typedKey];
    }
  });

  return filteredQuery;
};
