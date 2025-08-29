import * as Yup from "yup";

export const bookingSchema = Yup.object().shape({
    fullName: Yup.string()
        .required("Full Name is required")
        .min(3, "Full Name must be at least 3 characters"),
    phone: Yup.string()
        .required("Contact Number is required")
        .matches(/^[6-9]{10}$/, "Phone number must be 10 digits"),
    date: Yup.date()
        .required("Wedding Date is required")
        .min(new Date(), "Wedding date cannot be in the past"),
    venue: Yup.string()
        .required("Venue / Location is required"),
    guests: Yup.number()
        .typeError("Guests must be a number")
        .required("Number of Guests is required")
        .min(1, "At least 1 guest required"),
    service: Yup.array()
        .of(Yup.string())
        .min(1, "Please select at least one service"),
});
