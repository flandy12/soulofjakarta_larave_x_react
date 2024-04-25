import React, { useState } from "react";
import Loading from "../compoments/loading";
import {
    Navbar,
    NavbarMobile,
    getSubNavbar,
    getSubNavbarMobile,
    removeSubNavbar,
} from "../compoments/navbar";
import { fetchData, removeSpace } from "../helper/helper";
import Layout from "./layout/layout";

const PrivacyPolicy = ({ Categories_Navbar }) => {
    const [loading, setLoading] = useState(true);
    const [categories, setcategories] = useState(Categories_Navbar);

    const Content = () => {
        return (
            <>
                <Navbar>
                    <div
                        className="w-full relative "
                        id="navbar-dropdown-setting"
                        onMouseLeave={removeSubNavbar}
                        data-target="dropdownNavbar"
                    >
                        <ul
                            className="py-2 text-sm text-gray-400 bg-black w-44 rounded"
                            aria-labelledby="dropdownLargeButton"
                        >
                            {categories.map((value, key) => (
                                // setSubcategories(value.subCategories),cons

                                <li key={key} className="col">
                                    <a
                                        href={`/indeks/semua/${value.name.toLocaleLowerCase()}`}
                                        className="block font-medium px-4 py-2   text-base"
                                        data-target={`${value.name}_wrapper`}
                                        data-element={`${value.nam}_element`}
                                        data-key={key}
                                        onMouseMove={getSubNavbar}
                                    >
                                        {value.name}
                                    </a>
                                    <ul
                                        className={`hidden   bg-black rounded-md px-4 py-2 mt-2 sub-navbar`}
                                        id={`${value.name}_wrapper`}
                                    >
                                        {categories[key].subCategories.map(
                                            (values, keys) => (
                                                <li className="py-2" key={keys}>
                                                    <a
                                                        href={`/indeks/semua/${value.name.toLocaleLowerCase()}/${removeSpace(
                                                            values.name.toLocaleLowerCase()
                                                        )}`}
                                                    >
                                                        <div className="flex items-center space-x-4">
                                                            <span className="text-base">
                                                                {values.name}
                                                            </span>
                                                        </div>
                                                    </a>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Navbar>

                <NavbarMobile>
                    <div
                        className="w-full relative "
                        data-target="dropdownNavbar"
                    >
                        <ul
                            className="py-2 text-sm text-gray-400 w-full font-base p-2 mt-2 space-y-1"
                            aria-labelledby="dropdownLargeButton"
                        >
                            {categories.map((value, key) => (
                                <li
                                    key={key}
                                    className="col border rounded bg-white item-dropdown text-black"
                                    id={`${value.name}_dropdown`}
                                >
                                    <a
                                        href={`/indeks/semua/${value.name.toLocaleLowerCase()}`}
                                    >
                                        <div
                                            className="block font-medium px-4 py-2 cursor-pointer"
                                            data-target={`${value.name}_wrapper_mobile`}
                                            data-element={`${value.name}_dropdown`}
                                            data-key={key}
                                            onClick={getSubNavbarMobile}
                                        >
                                            {value.name}
                                        </div>
                                    </a>
                                    <ul
                                        className={`hidden py-2 px-4 bg-white text-sm text-gray-400 rounded font-base w-full sub-navbar cursor-pointer`}
                                        id={`${value.name}_wrapper_mobile`}
                                    >
                                        {categories[key].subCategories.map(
                                            (values, keys) => (
                                                <li
                                                    className="col py-2"
                                                    key={keys}
                                                >
                                                    <a
                                                        href={`/indeks/semua/${value.name.toLocaleLowerCase()}/${removeSpace(
                                                            values.name.toLocaleLowerCase()
                                                        )}`}
                                                        className="cursor-pointer"
                                                    >
                                                        <div className="flex items-center space-x-4">
                                                            <span className="">
                                                                {values.name}
                                                            </span>
                                                        </div>
                                                    </a>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </NavbarMobile>
                <div className="container mx-auto">
                    <div className=" mt-0 xl:my-20 lg:my-20 md:my-20">
                        <div className="col-span-8 xl:col-span-6 lg:col-span-6 md:col-span-6 py-4 xl:py-4 lg:py-3 md:py-2">
                            <div className="mb-5 xl:mb-10 lg:mb-10 md:mb-10  ">
                                <h1 className="font-bold text-lg xl:text-3xl lg:text-3xl md:text-3xl text-center">
                                    Kebijakan Privasi
                                </h1>
                            </div>

                            <div className="body-privacy font-base">
                                <p className="mb-3 space-y-1">
                                    Kebijakan Privasi
                                </p>
                                <p>
                                    Kami menyadari bahwa Pelanggan sangat peduli
                                    dengan bagaimana informasi mengenai data
                                    Pelanggan digunakan dan dibagikan dan kami
                                    sangat mengapresiasi kepercayaan dari
                                    Pelanggan bahwa kami akan menggunakan
                                    informasi ini dengan sangat berhati-hati dan
                                    dengan sebaik-baiknya. Dengan rasa hormat
                                    kami yang sangat tinggi terkait dengan
                                    perlindungan privasi Pelanggan, Soul of
                                    Jakarta menyusun Kebijakan Privasi ini untuk
                                    mengumumkan, mengirimkan, menyebarkan,
                                    menghapus dan menghacurkan Data Pribadi
                                    Pelanggan yang diberikan kepada Soul of
                                    Jakarta atau yang dikumpulkan oleh Soul of
                                    Jakarta baik pada saat melakukan registrasi,
                                    mengakses situs website serta menggunakan
                                    layanan atau produk Soul of Jakarta yang
                                    diatur pada Kebijakan Privasi yang terpisah.
                                    Pelanggan wajib membaca Kebijakan Privasi
                                    ini dengan seksama untuk memastikan
                                    bagaimana kami memproses Data Pribadi
                                    Pelanggan pada Soul of Jakarta.{" "}
                                    <b>
                                        Dengan menggunakan layanan Soul of
                                        Jakarta, maka Pelanggan menyetujui
                                        praktik yang dijelaskan di dalam
                                    </b>
                                    Kebijakan Privasi ini.
                                </p>
                                <p>
                                    Istilah - istilah dalam huruf kapital yang
                                    digunakan memiliki arti yang sama dengan
                                    yang terdapat dalam syarat dan ketentuan
                                    Soul of Jakarta yang tertera pada halaman
                                    berbeda.
                                </p>
                                <ol className="list-decimal ps-5">
                                    <b className="">
                                        <li className="mt-3">DATA PRIBADI</li>
                                    </b>{" "}
                                    <br />
                                    <p>
                                        Data pribadi adalah setiap data,
                                        informasi dan/atau informasi dalam
                                        bentuk apapun yang dapat
                                        mengidentifikasi Pelanggan yang dari
                                        waktu ke waktu Pelanggan sampaikan
                                        kepada <b>Soul of Jakarta</b> atau yang
                                        Pelanggan sertakan atau sampaikan di,
                                        pada, dan/atau melalui situs website,
                                        perangkat, produk, layanan, toko online
                                        dan fisik dan aplikasi atau yang
                                        dikumpulkan Soul of Jakarta selama
                                        interaksi Pelanggan dengan konten dan
                                        layanan yang tersedia melalui layanan
                                        Soul of Jakarta yang menyangkut
                                        informasi mengenai pribadi Pelanggan,
                                        yang meliputi antara lain : nama
                                        lengkap, alamat surat elektronik
                                        (e-mail), nomor ponsel, data pasangan
                                        Pelanggan, data anggota keluarga
                                        Pelanggan, data teman Pelanggan,
                                        (termasuk namun tidak terbatas pada:
                                        alamat IP, informasi lokasi, data
                                        perangkat Pelanggan, nomor IMEI, nama
                                        aplikasi yang telah dilampirkan pada
                                        perangkat Pelanggan, pencarian
                                        informasi), data mengenai informasi
                                        tentang aktivitas transaksi Pelanggan
                                        menggunakan situs website dan/atau
                                        aplikasi Soul of Jakarta dan/atau
                                        Strategic Partner, data dari sumber
                                        lain, seperti informasi pengiriman dan
                                        alamat yang diperbaharui dari operator
                                        kami, yang kami gunakan untuk
                                        memperbaiki catatan kami dan mengirimkan
                                        pembelian Pelanggan berikutnya dengan
                                        lebih mudah, dan data lain yang
                                        diklasifikasikan sebagai data pribadi.
                                    </p>
                                    <p className="mt-2 font-bold">
                                        KEAKURATAN DATA PRIBADI
                                    </p>
                                    <p>
                                        Soul of Jakarta membutuhkan dan
                                        mengambil Data Pribadi Pelanggan untuk
                                        dapat mengoperasikan, menyediakan,
                                        mengembangkan serta memperbaiki produk
                                        dan jasa yang Soul of Jakarta tawarkan
                                        kepada Pelanggan dan juga untuk dapat
                                        melakukan registrasi serta memproses
                                        transaksi Pelanggan. Data Pribadi yang
                                        Pelanggan berikan kepada Soul of Jakarta
                                        adalah benar dan berdasarkan fakta.
                                        Pelanggan wajib memperbaharui dan
                                        memberitahu Soul of Jakarta apabila ada
                                        perubahan terhadap Data Pribadi
                                        Pelanggan dengan mengikuti ketentuan
                                        yang berlaku sebagaimana dijelaskan pada
                                        Poin X dibawah.
                                    </p>
                                    <b>
                                        <li className="pt-4">
                                            PENGUMPULAN DATA PRIBADI
                                        </li>
                                    </b>{" "}
                                    <br />
                                    <p>
                                        Kami menerima dan menyimpan Data Pribadi
                                        apa pun yang Pelanggan berikan terkait
                                        Dengan Layanan Soul of Jakarta.
                                        Pelanggan dapat memilih untuk tidak
                                        memberikan informasi tertentu, tetapi
                                        Pelanggan mungkin tidak dapat
                                        memanfaatkan banyak layanan Soul of
                                        Jakarta kami.
                                    </p>
                                    <p>
                                        Kami secara otomatis mengumpulkan dan
                                        menyimpan jenis Data Pribadi tertentu
                                        mengenai penggunaan Pelanggan atas
                                        layanan Soul of Jakarta kami,
                                        termasuk/namun tidak terbatas pada
                                        informasi tentang interaksi Pelanggan
                                        dengan konten dan layanan yang tersedia
                                        melalui Layanan Soul of Jakarta.
                                    </p>
                                    <p>
                                        Seperti situs website kebanyakan, kami
                                        menggunakan “cookies”, piksel dan
                                        pengindentifikasi untuk lainya (yang
                                        akan diterapkan) untuk mengenali browser
                                        atau perangkat Pelanggan saat browser
                                        website atau perangkat Pelanggan
                                        mengakses Layanan Soul of Jakarta dan
                                        konten lain yang disajikan oleh atau
                                        atas nama Soul of Jakarta di situs
                                        website lain agar kami dapat mempelajari
                                        lebih lanjut tentang minta Pelanggan :
                                    </p>
                                    <ul className="list-disc space-y-2 ps-7">
                                        <li>
                                            Mengenali Pelanggan saat Pelanggan
                                            masuk untuk menggunakan layanan
                                            kami. Ini memungkinkan kami untuk
                                            memberi Pelanggan rekomendasi
                                            produk, menampilkan konten yang
                                            dipersonalisasi, mengenali Pelanggan
                                            sebagai anggota Program Loyalitas
                                            kami dan menyediakan kustomisasi
                                            fitur dan layanan khusus lainnya.
                                        </li>
                                        <li>
                                            Melacak preferensi yang Pelanggan
                                            tentukan. Ini memungkinkan kami
                                            untuk menghormati preferensi
                                            Pelanggan, seperti apakah Pelanggan
                                            ingin melihat iklan berbasi minat
                                            atau tidak. Pelanggan dapat mengatur
                                            preferensi Pelanggan melalui akun
                                            Pelanggan.
                                        </li>
                                        <li>
                                            Melacak item yang disimpan di
                                            keranjang belanja Pelanggan.
                                        </li>
                                        <li>
                                            Melakukan penelitian dan diagnostic
                                            untuk meningkatkan konten Layanan
                                            Soul of Jakarta.
                                        </li>
                                        <li>Mencegah aktivitas penipuan.</li>
                                        <li>Meningkatkan keamanan</li>
                                        <li>
                                            Menyampaikan konten, termasuk iklan
                                            yang relevan dengan minta Pelanggan
                                            di situs Soul of Jakarta dan situs
                                            pihak ke tiga.
                                        </li>
                                        <li>
                                            Pelaporan. Hal ini memungkinkan kami
                                            untuk mengukur dan menganalisis
                                            kinerja pelayanan Soul of Jakarta.
                                        </li>
                                    </ul>{" "}
                                    <br />
                                    <p>
                                        Pelanggan dapat mengelola cookie browser
                                        melalui pengaturan browser Pelanggan.
                                        Fitur ‘Bantuan’ di Sebagian besar
                                        browser akan memberitahu Pelanggan cara
                                        mencegah browser Pelanggan menerima
                                        cookie baru, cara agar browser
                                        memberitahu Pelanggan saat Pelanggan
                                        menerima cookie baru, cara memblokir
                                        cookie, dan kapan cookie akan
                                        kadarluarsa. Jika Pelanggan memblokir
                                        semua cookie di browser Pelanggan, baik
                                        kami maupun pihak ketiga tidak akan
                                        mentransfer cookie ke browser Pelanggan.
                                        Namun, jika Pelanggan melakukan ini,
                                        Pelanggan mungkin harus menyesuaikan
                                        beberapa preferensi secara manual setiap
                                        kali Pelanggan mengunjungi situs dan
                                        beberapa fitur serta layanan mungkin
                                        tidak akan berfungsi. <br />
                                        Kami mungkin menerima informasi tentang
                                        Pelanggan dari Pihak Ketiga selama Pihak
                                        Ketiga telah memperoleh persetujuan
                                        Pelanggan untuk memberikan inforamsi
                                        yang diperlukan (sebagaimana relevan),
                                        sebagai contoh informasi pengiriman dan
                                        alamat dari operator kami yang kami
                                        gunakan untuk memperbaiki catatan kami
                                        dan mengirimkan pembelian Pelanggan
                                        berikutnya dengan lebih mudah.
                                    </p>
                                    <b>
                                        <li className="pt-3">
                                            PENGGUNAAN DATA PRIBADI
                                        </li>
                                    </b>{" "}
                                    <br />
                                    <p>
                                        <b>Soul of Jakarta</b> akan memproses,
                                        menganalisa, dan/atau menggunakan Data
                                        Pribadi Pelanggan untuk tujuan berikut
                                        dan tujuan lainnya yang diizinkan oleh
                                        hukum dan peraturan yang berlaku :
                                    </p>
                                    <ul className="list-disc space-y-2 ps-7">
                                        <li>
                                            <b>
                                                Pembelian dan pengiriman produk
                                                dan layanan.{" "}
                                            </b>
                                            Kami menggunakan Data Pribadi
                                            Pelanggan untuk menerima dan
                                            menangani pesanan, mengirimkan
                                            produk dan layanan, memproses
                                            pembayaran, dan berkomunikasi dengan
                                            Pelanggan tentang pesanan, produk
                                            dan layanan, serta penawaran
                                            promosi.
                                        </li>
                                        <li>
                                            <b>
                                                Menyediakan, memecahkan masalah,
                                                dan meningkatkan Layanan Soul of
                                                Jakarta.{" "}
                                            </b>
                                            Kami menggunakan Data Pribadi
                                            Pelanggan untuk menyediakan
                                            fungsionalitas, menganalisis
                                            kinerja, memperbaiki error, dan
                                            meningkatkan kegunaan dan
                                            efektivitas Layanan Soul of Jakarta.
                                        </li>
                                        <li>
                                            <b>
                                                Rekomendasi dan personalisasi.
                                            </b>{" "}
                                            Kami menggunakan Data Pribadi
                                            Pelanggan untuk merekomendasikan
                                            fitur, produk, dan layanan yang
                                            mungkin menarik bagi Pelanggan,
                                            mengidentifikasi preferensi
                                            Pelanggan, dan mempersonalisasi
                                            pengalaman Pelanggan atas Layanan
                                            Soul of Jakarta.
                                        </li>
                                        <li>
                                            <b>
                                                Menyediakan layanan gambar dan
                                                kamera.
                                            </b>{" "}
                                            Saat Pelanggan menggunakan layanan
                                            gambar dan kamera Pelanggan, kami
                                            menggunakan gambar, video, dan data
                                            pribadi lainnya untuk menanggapi
                                            permintaan Pelanggan, memberikan
                                            layanan yang diminta kepada
                                            Pelanggan, dan meningkatkan layanan
                                            kami.
                                        </li>
                                        <li>
                                            <b>Mematuhi kewajiban hukum.</b>{" "}
                                            Dalam kasus tertentu, kami
                                            mengumpulkan dan menggunakan Data
                                            Pribadi Pelanggan untuk mematuhi
                                            hukum. Misalnya, kami mengumpulkan
                                            informasi dari Pelanggan mengenai
                                            rekening bank untuk verifikasi
                                            identitas dan tujuan lainnya.
                                        </li>
                                        <li>
                                            <b>Komunikasi dengan Pelanggan.</b>{" "}
                                            Kami menggunakan Data Pribadi
                                            Pelanggan untuk berkomunikasi dengan
                                            Pelanggan sehubungan dengan Layanan
                                            Soul of Jakarta melalui saluran yang
                                            berbeda (misalnya, melalui telepon,
                                            email, obrolan).
                                        </li>
                                        <li>
                                            <b>Periklanan dan Personalisasi.</b>{" "}
                                            Kami menggunakan Data Pribadi
                                            Pelanggan untuk menampilkan iklan
                                            berbasis minat untuk fitur, produk,
                                            dan layanan yang mungkin menarik
                                            bagi Pelanggan.
                                        </li>
                                        <li>
                                            <b>
                                                Pencegahan Penipuan dan
                                                Pencucian Uang dan Risiko
                                                Kredit.
                                            </b>{" "}
                                            Kami menggunakan Data Pribadi
                                            Pelanggan untuk mencegah dan
                                            mendeteksi penipuan serta pencucian
                                            uang dan penyalahgunaan untuk
                                            melindungi keamanan Pelanggan kami,
                                            Soul of Jakarta, dan lainnya. Kami
                                            juga dapat menggunakan metode
                                            penilaian untuk menilai dan
                                            mengelola risiko kredit.
                                        </li>
                                    </ul>{" "}
                                    <br />
                                    <b>
                                        <li className="pt-3">
                                            PENGUNGKAPAN KEPADA PIHAK KETIGA
                                        </li>
                                    </b>{" "}
                                    <br />
                                    <p>
                                        Data Pribadi pelanggan kami adalah
                                        bagian penting dari bisnis kami, dan
                                        tidak dalam bisnis menjual data pribadi
                                        pelanggan kami kepada orang lain.
                                        Pelanggan setuju bahwa kami dapat
                                        membagikan Data Pribadi Pelanggan hanya
                                        seperti yang dijelaskan di bawah ini :
                                    </p>
                                    <ol className="list-decimal ps-7">
                                        <li>
                                            Untuk tujuan pengembangan,
                                            peningkatan, perbaikan,
                                            perlindungan, dan pemeliharaan
                                            produk dan/atau Layanan Soul of
                                            Jakarta, Soul of Jakarta terkadang
                                            diwajibkan untuk menampilkan,
                                            menerbitkan, mentransmisikan,
                                            mentransfer, dan/atau
                                            menyebarluaskan Data Pribadi kepada
                                            Pihak Ketiga. Untuk menghindari
                                            keragu-raguan, Pihak Ketiga yang
                                            dimaksud dalam ayat ini yaitu,
                                            termasuk namun tidak terbatas pada:
                                        </li>{" "}
                                        <br />
                                        <p>
                                            a. Pihak Ketiga yang berada dalam
                                            grup Soul of jakarta kami dan/atau
                                            afiliasi kami untuk atau sehubungan
                                            dengan tujuan yang berkaitan dengan
                                            penyediaan Program Loyalitas,
                                            pengelolaan bisnis, dan kegiatan
                                            lainnya;
                                        </p>
                                        <p>
                                            b. Pihak Ketiga yang merupakan
                                            otoritas atau lembaga pemerintah
                                            jika (i) diwajibkan atau
                                            diperintahkan oleh undang-undang dan
                                            peraturan yang berlaku (termasuk
                                            namun tidak terbatas pada menanggapi
                                            pertanyaan mengenai peraturan,
                                            investigasi atau pedoman, atau
                                            mematuhi persyaratan atau ketentuan
                                            pengarsipan dan pelaporan
                                            berdasarkan peraturan yang berlaku
                                            pada peraturan perundang-undangan)
                                            dan/atau (ii) ada proses hukum yang
                                            terkait dengan Soul of jakarta;
                                        </p>
                                        <p>
                                            c. Pihak Ketiga jika ada transaksi
                                            Soul of Jakarta, seperti:
                                            pembentukan usaha bersama, penjualan
                                            anak Soul of Jakarta atau divisi,
                                            merger, konsolidasi,
                                            pengambilalihan, penjualan aset,
                                            atau likuidasi.
                                        </p>
                                        <p>
                                            d. Pihak Ketiga sehubungan dengan
                                            penyedia jasa yang dipekerjakan Soul
                                            of Jakarta untuk menjalankan fungsi
                                            atas nama Soul of Jakarta. Contohnya
                                            termasuk memenuhi pesanan untuk
                                            produk atau layanan, mengirim surat
                                            pos dan email, menghapus informasi
                                            berulang dari daftar pelanggan,
                                            menganalisis data, memberikan
                                            bantuan pemasaran, memberikan hasil
                                            pencarian dan tautan (termasuk
                                            daftar dan tautan berbayar),
                                            memproses pembayaran, mengirimkan
                                            konten, penilaian, menilai dan
                                            mengelola risiko kredit, dan
                                            menyediakan layanan pelanggan, jika
                                            berlaku. Penyedia layanan pihak
                                            ketiga ini memiliki akses ke Data
                                            Pribadi yang diperlukan untuk
                                            menjalankan fungsinya, tetapi tidak
                                            boleh menggunakannya untuk tujuan
                                            lain.
                                        </p>
                                        <p>
                                            e. Pihak Ketiga lainnya (termasuk
                                            agen, vendor, pemasok, kontraktor,
                                            Pihak Ketiga yang memberikan layanan
                                            kepada Soul of Jakarta atau
                                            Pelanggan, melakukan tugas atas nama
                                            Soul of Jakarta yang mengadakan
                                            kerjasama komersial dengan Soul of
                                            Jakarta) untuk atau sehubungan
                                            dengan tujuan Pihak Ketiga yang
                                            terlibat atau tujuan kerjasama Soul
                                            of Jakarta dengan Pihak Ketiga
                                            (tergantung keadaan), yang mungkin
                                            termasuk mengizinkan Pihak Ketiga
                                            untuk memperkenalkan atau menawarkan
                                            produk atau layanan kepada Pelanggan
                                            atau melakukan kegiatan lain
                                            termasuk pemasaran, penelitian,
                                            analisis dan pengembangan produk
                                            Pihak Ketiga tersebut (tergantung
                                            pada keadaan).
                                        </p>
                                        <p>
                                            Selain yang disebutkan di atas,
                                            Pelanggan akan menerima
                                            pemberitahuan dari Soul of Jakarta
                                            ketika Data Pribadi Pelanggan
                                            mungkin dibagikan kepada pihak
                                            ketiga dan Pelanggan akan memiliki
                                            kesempatan untuk memilih untuk tidak
                                            memberikan informasi tersebut.
                                        </p>
                                        <li>
                                            Sehubungan dengan penerapan widget
                                            atau konten dari dalam aplikasi
                                            dan/atau situs website, Soul of
                                            Jakarta dengan ini menyatakan bahwa
                                            Pihak Ketiga akan dan dapat
                                            mengirimkan, menyerahkan dan/atau
                                            memberikan Data Pribadi Pelanggan
                                            kepada pihak lain yang bekerjasama
                                            dengan Pihak Ketiga (sebagaimana
                                            relevan). Dalam hal ini, pihak lain
                                            yang menerima Data Pribadi Pelanggan
                                            akan dikenakan kewajiban terkait
                                            dengan pengiriman dan penggunaan
                                            data yang sama yang berlaku untuk
                                            Pihak Ketiga Soul of Jakarta.
                                        </li>{" "}
                                        <br />
                                    </ol>
                                    <b>
                                        <li className="pt-3">
                                            TAUTAN KE SITUS PIHAK KETIGA
                                        </li>
                                    </b>{" "}
                                    <br />
                                    <p>
                                        Layanan Soul of Jakarta mungkin berisi
                                        tautan ke situs Pihak Ketiga. Soul of
                                        Jakarta tidak bertanggung jawab atas
                                        perolehan, pengumpulan, pemrosesan,
                                        analisis, penggunaan, penyimpanan,
                                        penampilan, pengumuman, transmisi,
                                        penyebaran, penghapusan, dan pemusnahan
                                        Data Pribadi Pelanggan oleh Pihak Ketiga
                                        tersebut. Jika Pelanggan memberikan
                                        informasi langsung ke situs, maka
                                        kebijakan privasi dan syarat layanan di
                                        situs tersebut akan berlaku, sehingga
                                        segala akibat dari tindakan tersebut
                                        sepenuhnya menjadi tanggung jawab
                                        Pelanggan.
                                    </p>
                                    <b>
                                        <li className="pt-3">
                                            PENYIMPANAN DAN KEAMANAN DATA
                                        </li>
                                    </b>{" "}
                                    <br />
                                    <p>
                                        Soul of Jakarta bekerja untuk melindungi
                                        keamanan Data Pribadi Pelanggan selama
                                        transmisi dengan menggunakan protokol
                                        enkripsi dan perangkat lunak dan Soul of
                                        Jakarta memastikan bahwa Data Pribadi
                                        yang terkumpul dan/atau dikumpulkan oleh
                                        Soul of Jakarta akan disimpan dengan
                                        aman sesuai dengan hukum dan peraturan
                                        yang berlaku di Republik Indonesia.{" "}
                                    </p>
                                    <p>
                                        Pelanggan memahami dan menyetujui bahwa
                                        Soul of Jakarta akan menjaga pengamanan
                                        fisik, elektronik, dan prosedural
                                        sehubungan dengan pengumpulan,
                                        penyimpanan, dan pengungkapan Data
                                        Pribadi Pelanggan. Pelanggan setuju
                                        bahwa Soul of Jakarta akan menyimpan
                                        Data Pribadi selama diperlukan untuk
                                        memenuhi tujuan yang dijelaskan dalam
                                        Kebijakan Privasi ini.
                                    </p>
                                    <p>
                                        Prosedur keamanan kami terkait dengan
                                        Data Pribadi berarti bahwa kami dapat
                                        meminta untuk memverifikasi identitas
                                        Pelanggan sebelum kami mengungkapkan
                                        Data Pribadi Pelanggan kepada Pelanggan.
                                        Perangkat kami menawarkan fitur keamanan
                                        untuk melindungi perangkat dari akses
                                        tidak sah dan kehilangan data, sedangkan
                                        Pelanggan dapat mengontrol fitur ini dan
                                        mengkonfigurasinya berdasarkan kebutuhan
                                        Pelanggan.
                                    </p>
                                    <p>
                                        Penting bagi Pelanggan untuk melindungi
                                        dari akses tidak sah ke kata sandi
                                        Pelanggan dan ke komputer, perangkat,
                                        dan aplikasi Pelanggan. Kami menyarankan
                                        penggunaan kata sandi unik untuk akun
                                        Pelanggan yang tidak digunakan untuk
                                        akun online lainnya. Pastikan untuk
                                        keluar setelah selesai menggunakan
                                        komputer bersama.
                                    </p>
                                    <b>
                                        <li className="pt-3">
                                            PENYIMPANAN DAN KEAMANAN DATA
                                        </li>
                                    </b>{" "}
                                    <br />
                                    <p>
                                        Soul of Jakarta bertanggungjawab atas
                                        Data Pribadi yang Soul of Jakarta
                                        kumpulkan dari Pelanggan namun Pelanggan
                                        wajib menjaga kerahasiaan Data Pribadi
                                        Pelanggan, kata sandi dan/atau PIN yang
                                        Pelanggan buat dan gunakan untuk
                                        mengakses Data Pribadi Pelanggan
                                        dimanapun Pelanggan menyimpan Data
                                        Pribadi tersebut. Pelanggan, termasuk
                                        Akun, kata sandi dan/atau PIN untuk
                                        mengakses atau login ke aplikasi milik
                                        Pelanggan dan tidak mengizinkan Pihak
                                        Ketiga untuk mengakses Data Pribadi
                                        Pelanggan tanpa persetujuan dan
                                        sepengetahuan Pelanggan.
                                    </p>
                                    <p>
                                        Pelanggan bertanggungjawab atas semua
                                        penyalahgunaan Layanan Soul of Jakarta,
                                        kata sandi dan/atau PIN yang dibuat dan
                                        digunakan oleh Pelanggan pada aplikasi
                                        Soul of Jakarta dan/atau Strategic
                                        Partner yang berafiliasi dengan Soul of
                                        Jakarta untuk mengakses Data Pribadi
                                        Pelanggan termasuk akun, kata sandi
                                        dan/atau PIN untuk mengakses atau login
                                        ke aplikasi milik Pelanggan yang
                                        dilakukan oleh pihak selain Pelanggan
                                        dan penyalahgunaan tersebut bukan
                                        merupakan tanggung jawab Soul of
                                        Jakarta.
                                    </p>
                                    <p>
                                        Pelanggan wajib memberitahukan Soul of
                                        Jakarta jika Pelanggan meyakini bahwa
                                        kata sandi dan/atau PIN aplikasi yang
                                        berafiliasi dengan Soul of Jakarta untuk
                                        mengakses aplikasi Pelanggan
                                        disalahgunakan oleh pihak lain yang
                                        tidak bertanggung jawab dan/atau
                                        berwenang.
                                    </p>
                                    <b>
                                        <li className="pt-3">
                                            HAK KEKAYAAN INTELEKTUAL
                                        </li>
                                    </b>{" "}
                                    <br />
                                    <ol className="list-decimal ps-7 space-y-2">
                                        <li>
                                            Seluruh produk Soul of Jakarta dan
                                            sistem pendukungnya termasuk namun
                                            tidak terbatas pada: (a) tata letak,
                                            desain dan tampilan Layanan Soul of
                                            Jakarta yang terdapat atau
                                            ditampilkan pada Aplikasi; (b) logo,
                                            foto, gambar, nama, merek, kata,
                                            huruf, angka, tulisan, dan susunan
                                            warna yang terdapat pada produk Soul
                                            Of Jakarta; dan (c) gabungan
                                            unsur-unsur sebagaimana dimaksud
                                            dalam huruf (a) dan (b), sepenuhnya
                                            merupakan Hak atas Kekayaan
                                            Intelektual Soul of Jakarta dan
                                            tidak ada pihak lain yang juga
                                            memiliki hak atas produk/jasa Soul
                                            of Jakarta, serta tata letak,
                                            desain, dan tampilan produk;
                                        </li>{" "}
                                        <br />
                                        <li>
                                            Pelanggan tidak diperbolehkan dari
                                            waktu ke waktu untuk : <br />
                                            <ul className="ms-3 space-y-3">
                                                <li>
                                                    a. Menyalin, memodifikasi,
                                                    mengadaptasi, menerjemahkan,
                                                    membuat karya turunan dari,
                                                    mendistribusikan, menjual,
                                                    mentransfer, menampilkan
                                                    kepada publik, memperbanyak,
                                                    mentransmisikan,
                                                    mentransfer, menyiarkan,
                                                    mendeskripsikan, atau
                                                    membongkar bagian mana pun
                                                    dari atau dengan cara lain
                                                    mengeksploitasi Layanan Soul
                                                    of Jakarta yang dilisensikan
                                                    kepada Pelanggan, kecuali
                                                    sebagaimana diizinkan dalam
                                                    Kebijakan Privasi ini;
                                                </li>
                                                <li>
                                                    b. Melisensikan,
                                                    mensublisensikan, menjual,
                                                    menjual kembali,
                                                    mentransfer,
                                                    mendistribusikan atau
                                                    mengeksploitasi secara
                                                    komersial atau dengan cara
                                                    lain menyediakan perangkat
                                                    lunak dan/atau perangkat
                                                    lunak kepada Pihak Ketiga
                                                    dengan cara apa pun;
                                                </li>
                                                <li>
                                                    c. Mempublikasikan,
                                                    mendistribusikan atau
                                                    memperbanyak dengan cara apa
                                                    pun materi berhak cipta,
                                                    merek dagang, atau informasi
                                                    lain dari Soul of Jakarta
                                                    tanpa memperoleh persetujuan
                                                    sebelumnya dari hak milik
                                                    Soul of Jakarta atau pemilik
                                                    hak yang melisensikan haknya
                                                    kepada Soul of Jakarta;
                                                </li>
                                                <li>
                                                    d. Menghapus hak cipta,
                                                    merek dagang, atau informasi
                                                    kepemilikan lainnya yang
                                                    terkandung dalam
                                                    produk/layanan Soul of
                                                    Jakarta;
                                                </li>
                                                <li>
                                                    e. Merekayasa ulang Layanan
                                                    Soul of Jakarta untuk (i)
                                                    membangun counter produk
                                                    atau layanan, (ii) membangun
                                                    produk menggunakan ide,
                                                    fitur, fungsi atau grafik
                                                    yang serupa, atau (iii)
                                                    salinan ide, fitur, fungsi
                                                    atau grafik;
                                                </li>
                                                <li>
                                                    f. Meluncurkan program atau
                                                    skrip otomatis, termasuk,
                                                    tetapi tidak terbatas pada,
                                                    perayap web, robot web,
                                                    pengindeks web, bot, virus,
                                                    worm, atau aplikasi serupa
                                                    lainnya dan program apa pun
                                                    yang dapat membuat beberapa
                                                    permintaan server per detik,
                                                    membuat beban berat, atau
                                                    menghambat operasi dan/atau
                                                    kinerja Layanan Soul of
                                                    Jakarta;
                                                </li>
                                                <li>
                                                    g. Menggunakan robot,
                                                    spider, aplikasi pencarian /
                                                    pengambilan situs, mengambil
                                                    manual atau otomatis,
                                                    mengindeks, “penambangan
                                                    data” (data mine), atau
                                                    dengan cara apapun
                                                    mereproduksi atau
                                                    menghindari struktur
                                                    navigasi atau presentasi
                                                    Layanan Soul of Jakarta dan
                                                    isinya.
                                                </li>
                                            </ul>
                                        </li>
                                    </ol>{" "}
                                    <br />
                                    <b>
                                        <li className="pt-3">
                                            PERMINTAAN AKSES DAN PERUBAHAN DATA
                                            PRIBADI
                                        </li>
                                    </b>
                                    <br />
                                    <p>
                                        Tunduk pada peraturan perundang-undangan
                                        yang berlaku, Pelanggan dapat meminta
                                        akses dan/atau meminta perubahan Data
                                        Pribadi Pelanggan, melalui:
                                    </p>
                                    <ul className="list-disc ms-5 space-y-2">
                                        <li>
                                            Mengubah langsung melalui menu
                                            Profil yang ada di Soul Of Jakarta
                                        </li>
                                        <li>
                                            Menghubungi Pusat Bantuan Pelanggan
                                            dengan mengirimkan ke email
                                            info@soulofjakarta.id dengan
                                            menyertakan bukti/dokumen pendukung.
                                        </li>
                                    </ul>
                                    <br />
                                    <p>
                                        Soul of Jakarta berhak menolak
                                        permintaan Pelanggan untuk mengakses
                                        dan/atau mengubah Data Pribadi Pelanggan
                                        karena alasan yang dibenarkan
                                        berdasarkan peraturan perundang-undangan
                                        yang berlaku.
                                    </p>
                                    <b>
                                        <li className="pt-3">
                                            HUKUM YANG BERLAKU
                                        </li>
                                    </b>
                                    <br />
                                    <p>
                                        Kebijakan Privasi ini diatur dan
                                        ditafsirkan sesuai dengan hukum Negara
                                        Republik Indonesia.
                                    </p>
                                    <b>
                                        <li className="pt-3">
                                            KETENTUAN PENGGUNAAN DAN REVISI
                                            KEBIJAKAN PRIVASI
                                        </li>
                                    </b>{" "}
                                    <br />
                                    <p>
                                        Soul of Jakarta dapat sewaktu-waktu
                                        mengubah, memperbaharui, dan/atau
                                        menambah sebagian atau seluruh ketentuan
                                        Kebijakan Privasi ini, sesuai dengan
                                        bisnis Soul of Jakarta ke depan,
                                        dan/atau perubahan peraturan
                                        perundang-undangan. Jika Kebijakan
                                        Privasi ini
                                        direvisi/diperbaharui/ditambahkan, maka
                                        Soul of Jakarta akan memberitahukan
                                        kepada{" "}
                                    </p>
                                    <p>
                                        Pelanggan melalui media komunikasi yang
                                        ditentukan oleh Soul of Jakarta. Dengan
                                        terus berkomunikasi dengan Soul of
                                        Jakarta, menggunakan layanan/fitur Soul
                                        of Jakarta berarti menambah penerimaan
                                        Pelanggan atas perubahan, pembaharuan,
                                        dan/atau penambahan yang telah Soul of
                                        Jakarta buat pada Kebijakan Privasi ini.
                                        Jika Pelanggan terus menggunakan Layanan
                                        Soul of Jakarta setelah membaca
                                        Kebijakan Privasi ini, maka Pelanggan
                                        dianggap telah menyetujui Kebijakan
                                        Privasi ini dan dapat terus menggunakan
                                        aplikasi.
                                    </p>
                                    <p>
                                        Jika Pelanggan telah memilih untuk
                                        menggunakan Layanan Soul of Jakarta,
                                        penggunaan Pelanggan dan setiap
                                        perselisihan terkait privasi tunduk pada
                                        Kebijakan Privasi ini dan Syarat dan
                                        Ketentuan kami. Jika Pelanggan memiliki
                                        kekhawatiran tentang privasi di Soul of
                                        Jakarta, silakan hubungi kami dengan
                                        deskripsi menyeluruh, dan kami akan
                                        mencoba menyelesaikannya. Kecuali
                                        dinyatakan lain, Kebijakan Privasi kami
                                        saat ini berlaku untuk semua informasi
                                        yang kami miliki tentang Pelanggan dan
                                        akun Pelanggan. Kami berkomitmen dengan
                                        janji yang kami buat dan tidak akan
                                        pernah mengubah kebijakan dan praktik
                                        kami secara material untuk membuatnya
                                        kurang protektif terhadap informasi
                                        pelanggan yang dikumpulkan di masa lalu
                                        tanpa persetujuan dari pelanggan yang
                                        terpengaruh.
                                    </p>
                                    <b>
                                        <li className="pt-3">
                                            PERNYATAAN DAN PERSETUJUAN KONSUMEN
                                        </li>
                                    </b>{" "}
                                    <br />
                                    <p>
                                        Berdasarkan Kebijakan Privasi Soul of
                                        Jakarta tersebut di atas, dengan ini
                                        Pelanggan menyatakan:
                                    </p>
                                    <ol>
                                        <li>
                                            Bahwa Data Pribadi yang diberikan
                                            Pelanggan merupakan data yang benar
                                            dan sah, oleh karenanya Pelanggan
                                            memberikan persetujuan kepada Soul
                                            of Jakarta untuk memperoleh,
                                            mengumpulkan, mengolah,
                                            menganalisis, menyimpan,
                                            menampilkan, mengumumkan,
                                            mengirimkan, menyebarluaskan,
                                            menghapus dan memusnahkan sesuai
                                            dengan Kebijakan Privasi ini dan
                                            peraturan perundang-undangan yang
                                            berlaku;
                                        </li>
                                        <li>
                                            Bahwa Pelanggan telah membaca,
                                            memahami dan menyetujui seluruh
                                            ketentuan yang terdapat dalam
                                            Kebijakan Privasi ini dan menjadi
                                            satu kesatuan yang tak terpisahkan
                                            dengan Syarat dan Ketentuan Soul of
                                            Jakarta;
                                        </li>
                                        <li>
                                            Bahwa Pelanggan membebaskan Soul of
                                            Jakarta dari setiap tuntutan,
                                            gugatan, ganti rugi, dan/atau klaim
                                            sehubungan dengan kegagalan
                                            pemrosesan transaksi yang disebabkan
                                            oleh ketidakakuratan/ketidakbenaran
                                            Data Pribadi yang Pelanggan berikan
                                            kepada Soul of Jakarta;
                                        </li>
                                        <li>
                                            Bahwa Pelanggan telah memberikan
                                            persetujuan, izin, dan wewenang
                                            kepada Soul of Jakarta untuk
                                            mengumumkan, mengirimkan, dan/atau
                                            menyebarluaskan serta memberikan
                                            akses atas Data Pribadi kepada Pihak
                                            Ketiga untuk tujuan-tujuan
                                            sebagaimana dimaksud dalam poin IV
                                            di atas.
                                        </li>
                                    </ol>{" "}
                                    <br />
                                    <b>
                                        <li className="pt-3">MASA BERLAKU</li>
                                    </b>{" "}
                                    <br />
                                    <p>
                                        Kebijakan Privasi ini berlaku dan
                                        mengikat secara hukum sejak Pelanggan
                                        berhasil registrasi.
                                    </p>
                                </ol>

                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    return (
        <Layout>
            <div className="relative block">
                <Content />
            </div>
        </Layout>
    );
};

export default PrivacyPolicy;
