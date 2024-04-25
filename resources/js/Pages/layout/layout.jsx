import React from "react";

import { Alert, AlertError, AlertSucces } from "../../compoments/alert";
import Loading from "../../compoments/loading";
import Footer from "../../compoments/footer";

// Pass the child props
export default function Layout({ children }) {
    const message = (
        <p>
            Terima Kasih, anda telah berlangganan dengan Soulofjakarta.id <br />{" "}
            Anda akan menerima update informasi dari kami via email.
        </p>
    );
    const message_err = (
        <p>Maaf Anda telah memasukkan alamat email yang tidak valid !</p>
    );
    return (
        <>
            <Alert>
                <div id="alert_success" className="hidden">
                    <AlertSucces message={message} />
                </div>
                <div id="alert_error" className="hidden">
                    <AlertError message={message_err} />
                </div>
            </Alert>
            <div id="loading" className="hidden">
                <Loading />
            </div>
            <div id="body">
                <div>
                    {/* display the child prop */}
                    {children}
                </div>
                <Footer />
            </div>
        </>
    );
}
