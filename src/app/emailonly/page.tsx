"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function EmailOnlyPage() {
    const [password, setPassword] = useState("");
    const [studentName, setStudentName] = useState("");
    const [email, setEmail] = useState("");
    const [type, setType] = useState<"start" | "end">("start");
    const [amount, setAmount] = useState("");
    const [deliveryDate, setDeliveryDate] = useState("");

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const res = await fetch("/api/admin/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    password,
                    studentName,
                    email,
                    type,
                    amount: type === "start" ? amount : undefined,
                    deliveryDate: type === "start" ? deliveryDate : undefined,
                }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus({ success: true, message: "Email sent successfully!" });
                // Optional: clear fields
            } else {
                setStatus({ success: false, message: data.error || "Failed to send email" });
            }
        } catch (err: any) {
            setStatus({ success: false, message: "Network error occurred." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Admin Email Tool</h1>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.field}>
                        <label>Admin Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter env password"
                        />
                    </div>

                    <div className={styles.separator} />

                    <div className={styles.field}>
                        <label>Template Type</label>
                        <div className={styles.radioGroup}>
                            <label className={type === "start" ? styles.activeRadio : ""}>
                                <input
                                    type="radio"
                                    name="type"
                                    checked={type === "start"}
                                    onChange={() => setType("start")}
                                />
                                Start Project
                            </label>
                            <label className={type === "end" ? styles.activeRadio : ""}>
                                <input
                                    type="radio"
                                    name="type"
                                    checked={type === "end"}
                                    onChange={() => setType("end")}
                                />
                                End Project
                            </label>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.field}>
                            <label>Student Name</label>
                            <input
                                type="text"
                                value={studentName}
                                onChange={(e) => setStudentName(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.field}>
                            <label>Student Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {type === "start" && (
                        <div className={styles.row}>
                            <div className={styles.field}>
                                <label>Total Amount (e.g. ₹5,000)</label>
                                <input
                                    type="text"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={styles.field}>
                                <label>Delivery Date</label>
                                <input
                                    type="date"
                                    value={deliveryDate}
                                    onChange={(e) => setDeliveryDate(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    )}

                    <button type="submit" disabled={loading} className={styles.submitBtn}>
                        {loading ? "Sending..." : "Send Email"}
                    </button>

                    {status && (
                        <div className={`${styles.status} ${status.success ? styles.success : styles.error}`}>
                            {status.message}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}
