"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function EmailOnlyPage() {
    const [password, setPassword] = useState("");
    const [studentName, setStudentName] = useState("");
    const [email, setEmail] = useState("");
    const [type, setType] = useState<"start" | "end" | "custom">("start");
    const [amount, setAmount] = useState("");
    const [deliveryDate, setDeliveryDate] = useState("");
    const [customTitle, setCustomTitle] = useState("");
    const [customBody, setCustomBody] = useState("");

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
                    customTitle: type === "custom" ? customTitle : undefined,
                    customBody: type === "custom" ? customBody : undefined,
                }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus({ success: true, message: "Email sent successfully!" });
                // Reset fields
                setStudentName("");
                setEmail("");
                setAmount("");
                setDeliveryDate("");
                setCustomTitle("");
                setCustomBody("");
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
                                Start
                            </label>
                            <label className={type === "end" ? styles.activeRadio : ""}>
                                <input
                                    type="radio"
                                    name="type"
                                    checked={type === "end"}
                                    onChange={() => setType("end")}
                                />
                                End
                            </label>
                            <label className={type === "custom" ? styles.activeRadio : ""}>
                                <input
                                    type="radio"
                                    name="type"
                                    checked={type === "custom"}
                                    onChange={() => setType("custom")}
                                />
                                Custom
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

                    {type === "custom" && (
                        <>
                            <div className={styles.field}>
                                <label>Email Subject / Title</label>
                                <input
                                    type="text"
                                    value={customTitle}
                                    onChange={(e) => setCustomTitle(e.target.value)}
                                    required
                                    placeholder="e.g. Project Update: Week 1"
                                />
                            </div>
                            <div className={styles.field}>
                                <label>Message Body</label>
                                <textarea
                                    value={customBody}
                                    onChange={(e) => setCustomBody(e.target.value)}
                                    required
                                    rows={6}
                                    placeholder="Type your message here..."
                                    style={{
                                        background: "#181828",
                                        border: "1px solid #2a2a3b",
                                        borderRadius: "6px",
                                        padding: "0.75rem",
                                        color: "#fff",
                                        fontSize: "1rem",
                                        fontFamily: "inherit",
                                        resize: "vertical"
                                    }}
                                />
                            </div>
                        </>
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
