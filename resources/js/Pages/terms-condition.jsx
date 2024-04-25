import React, { useState } from "react";
import Loading from "../compoments/loading";
import {
    Navbar,
    NavbarMobile,
    getSubNavbar,
    getSubNavbarMobile,
    removeSubNavbar,
} from "../compoments/navbar";
import { removeSpace } from "../helper/helper";
import Layout from "./layout/layout";

const TermsCondition = ({ Categories_Navbar }) => {
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
                    <div className="container my-0 xl:my-20 lg:my-20 md:my-20 gap-0">
                        <div className="py-4 xl:py-4 lg:py-3 md:py-2">
                            <div className="mb-10 ">
                                <h1 className="font-bold text-lg xl:text-3xl lg:text-3xl md:text-3xl text-center">
                                    Syarat dan Ketentuan
                                </h1>
                            </div>
                            <div className="space-y-4 font-base">
                                <p>
                                    Terima kasih atas kunjungan anda ke
                                    aplikasi, website dan layanan kami. Kami
                                    berharap kunjungan anda dapat bermanfaat dan
                                    memberikan kenyamaman dalam mengakses dan
                                    menggunakan seluruh layanan yang tersedia di
                                    website atau aplikasi kami
                                </p>
                                <p>
                                    Website dan aplikasi ini dimiliki,
                                    dioperasikan dan diselenggarakan oleh PT.
                                    CIPTA KIDUNG ESKA, perseroan terbatas yang
                                    berdiri atas dasar hukum Republik Indonesia
                                    (selanjutnya secara Bersama-sama disebut
                                    sebagai “KAMI” atau “SOULOFJAKARTA”).
                                    Layanan kami tersedia secara online melalui
                                    : www.soulofjakarta.com atau berbagai akses,
                                    media, perangkat dan platform lainnya, baik
                                    yang sudah atau akan tersedia di kemudian
                                    hari.
                                </p>
                                <br />
                                <p>
                                    <b>PENGGUNAAAN</b>
                                </p>

                                <ol className="list-decimal ps-5 space-y-2">
                                    <li>
                                        Produk-produk, teknologi dan proses yang
                                        terdapat atau terkandung dalam website
                                        atau aplikasi, dimiliki oleh Kami atau
                                        pihak ketiga yang memberi hak kepada
                                        kami. Kecuali untuk penggunaan yang
                                        secara tegas diijinkan dan diperbolehkan
                                        dalam Syarat dan Ketentuan Umum ini,
                                        anda tidak memiliki ataupun menerima
                                        apapun dari Soulofjakarta.id dan
                                        Soulofjakarta.id tidak memberikan hak
                                        lain apapun kepada anda atas website
                                        atau aplikasi ini, berikut dengan segala
                                        data, informasi dan konten didalamnya.
                                    </li>
                                    <li>
                                        Dengan menggunakan aplikasi, website
                                        atau layanan yang tersedia didalamnya,
                                        maka anda menyatakan setuju tidak akan
                                        mengunduh, menanyakan atau mentransmisi
                                        dengan cara apapun dan atau membuat
                                        konten apapun tersedia untuk umum yang
                                        tidak konsisten dengan penggunaan yang
                                        diijinkan dalam Syarat dan Ketentuan
                                        Umum ini.
                                    </li>
                                    <li>
                                        Dalam website atau aplikasi ini mungkin
                                        terdapat link (tautan) ke website yang
                                        dikelola oleh pihak ketiga (“Situs
                                        Eksternal”) yang melakukan Kerjasama
                                        dengan Kami.
                                    </li>
                                    <li>
                                        Kami tidak mengoperasikan, mengendalikan
                                        atau mendukung dalam bentuk apapun Situs
                                        Eksternal yang bersangkutan ataupun
                                        konten/isinya. Anda bertanggung jawab
                                        penuh atas penggunan Situs Eksternal
                                        tersebut dan dianjurkan untuk
                                        mempelajari syarat dan ketentuan dari
                                        Situs Eksternal itu secara baik dan
                                        seksama.
                                    </li>
                                    <li>
                                        Layanan yang tersedia dalam aplikasi
                                        atau website ini secara umum menggunakan
                                        system re-marketing dan sistem cookies
                                        yang memungkinkan pihak ketiga (termasuk
                                        dan tidak terbatas pada Google)
                                        mengakses dan menggunakan data kunjungan
                                        dalam sistem Cookies website ini untuk
                                        menampilkan dan menayangkan Kembali tiap
                                        iklan Soulofjakarta.id melalui internet.
                                    </li>
                                    <li>
                                        Anda tidak boleh membuat tautan,
                                        melakukan screen capture atau data
                                        crawling ke aplikasi atau website tanpa
                                        adanya persetujua tertulis sebelumnya
                                        dari Soulofjakarta.id. Hal-hal tersebut
                                        dianggap sebagai pelanggaran hak milik
                                        intelektual Soulofjakarta.id
                                    </li>
                                </ol>

                                <br />

                                <p>
                                    <b>LAYANAN SOULOFJAKARTA.ID</b>
                                </p>

                                <ol className="list-decimal ps-5 space-y-2">
                                    <li>
                                        Soulofjakarta.id menyediakan dan
                                        menyelengarakan sistem dan fasilitas
                                        untuk Media Partner, Sistem Advertising
                                        dan fasilitas pemesanan tiket online
                                        secara terpadu (“Layanan”), anda juga
                                        dapat mencari informasi (“Produk”) yang
                                        anda inginkan, serta melakukan pemesanan
                                        dan pembelian dan sekaligus melakukan
                                        pembayaran secara online dan aman
                                        melalui berbagai sistem dan fasilitas
                                        pembayaran yang tersedia.
                                    </li>
                                    <li>
                                        kami secara umum dapat tersedia secara
                                        online selama dua puluh empat jam sehari
                                        dan tujuh hari dalam seminggu; kecuali
                                        dalam hal adanya perbaikan, peningkatan
                                        atau pemeliharaan pada aplikasi atau
                                        website kami.
                                    </li>
                                    <li>
                                        Produk disediakan, disuplai dan
                                        diselenggarakan oleh pihak ketiga
                                        (“Mitra Penyedia”) yang telah mengadakan
                                        Kerjasama dan telah mengadakan ikatan,
                                        baik secara langsung ataupun tidak
                                        langsung, dengan kami. Anda memahami dan
                                        mengakui bahwa :
                                        <ul className="list-decimal ps-5 space-y-2 mt-3">
                                            <li>
                                                Pemesan dan pembelian yang anda
                                                lakukan melalui
                                                Soulofjakarta.id, merupakan
                                                hubungan hukum dan kontrak yang
                                                mengikat antara Anda dan Mitra
                                                penyedia kami. Dalam hal ini,
                                                Soulofjakarta.id bertindak
                                                sebagai agen atau perantara yang
                                                bertugas untuk memfasilitasi
                                                transaksi antara Anda dan Mitra
                                                penyedia kami. Hubungan
                                                Soulofjakarta.id dan Mitra
                                                Penyedia terbatas pada hubungan
                                                kemitraan, sehingga perlu kami
                                                tekankan bahwa Mitra Penyedia
                                                BUKAN merupakan bagian dari
                                                Soulofjakarta.id
                                            </li>
                                            <li>
                                                {" "}
                                                Data dan informasi termasuk foto
                                                terkait dengan Produk tertentu
                                                yang Kami cantumkan pada
                                                aplikasi atau website merupakan
                                                data dan informasi yang Kami
                                                terima dari Mitra Penyedia, dan
                                                Kami mempublikasikan data dan
                                                informasi tersebut dengan itikad
                                                baik sesuai dengan data dan
                                                informasi yang Kami terima. Oleh
                                                karena itu, data, informasi dan
                                                foto dapat berbeda dengan
                                                aslinya.
                                            </li>
                                            <li>
                                                Kami tidak memiliki kendali atas
                                                data dan informasi yang
                                                diberikan oleh Mitra Penyedia,
                                                dan Kami tidak menjamin bahwa
                                                data dan informasi yang
                                                disajikan adalah akurat,
                                                lengkap, atau benar, dan
                                                terbebas dari kesalahan.
                                            </li>
                                            <li>
                                                Kami tidak memiliki kendali atas
                                                tindakan dan kesalahan yang
                                                dilakukan oleh Mitra Penyedia
                                                sehingga menyebabkan kerugian
                                                yang dialami oleh Anda di
                                                kemudian hari.{" "}
                                            </li>
                                            <li>
                                                Anda tidak diperbolehkan untuk
                                                menjual kembali Produk Kami,
                                                menggunakan, menyalin,
                                                mengawasi, menampilkan,
                                                men-download, atau mereproduksi
                                                konten atau informasi, piranti
                                                lunak, atau Layanan apa pun yang
                                                tersedia di aplikasi atau
                                                website Kami untuk kegiatan atau
                                                tujuan komersial apapun, tanpa
                                                persetujuan tertulis dari Kami
                                                sebelumnya.
                                            </li>
                                            <li>
                                                Anda dapat menggunakan aplikasi,
                                                website dan Layanan yang
                                                tersedia untuk membuat
                                                pemesanan/pembelian yang sah.
                                                Anda tidak diperbolehkan untuk
                                                membuat pemesanan/pembelian
                                                untuk tujuan spekulasi, tidak
                                                benar atau melanggar hukum. Jika
                                                Kami menemukan atau sewajarnya
                                                menduga bahwa
                                                pemesanan/pembelian yang Anda
                                                buat ternyata tidak sah, maka
                                                Kami mencadangkan hak untuk
                                                membatalkan pemesanan/pembelian
                                                Anda.
                                            </li>
                                            <li>
                                                Anda juga menjamin bahwa data
                                                dan informasi yang Anda berikan
                                                ke Kami, baik sehubungan dengan
                                                pemesanan/pemesanan ataupun
                                                pendaftaran pada
                                                Soulofjakarta.id, adalah data
                                                dan informasi yang akurat,
                                                terkini dan lengkap. Untuk
                                                ketentuan penggunaan data dan
                                                informasi yang Anda berikan,
                                                silakan untuk merujuk pada
                                                Kebijakan Penggunaan Data.
                                            </li>
                                            <li>
                                                Transaksi Soulofjakarta.id yang
                                                resmi hanyalah yang dilakukan
                                                melalui website dan/atau
                                                aplikasi Soulofjakarta.id. Kami
                                                tidak bertanggungjawab atas
                                                transaksi yang terjadi diluar
                                                website dan/atau aplikasi
                                                Soulofjakarta.id.
                                            </li>
                                            <li>
                                                Komunikasi yang resmi dari Kami
                                                hanyalah yang berasal dari
                                                alamat email sebagai berikut:
                                                info@soulofjakarta.id. Anda
                                                sepenuhnya bertanggung jawab
                                                terhadap setiap komunikasi
                                                diluar dari alamat email
                                                tersebut.
                                            </li>
                                            <li>
                                                Segala informasi yang terdapat
                                                dalam Surat Konfirmasi hanya
                                                untuk nama yang tertera pada
                                                Surat Konfirmasi. Anda
                                                sepenuhnya bertanggung jawab
                                                terhadap setiap informasi yang
                                                tersebar karena kelalaian
                                                dan/atau kesengajaan Anda
                                                sehingga menimbulkan kerugian
                                                bagi Anda atau pihak ketiga yang
                                                lainnya.
                                            </li>
                                        </ul>
                                    </li>
                                </ol>

                                <br />

                                <p>
                                    <b>PEMESANAN/PEMBELIAN PRODUK</b>
                                </p>

                                <ol className="list-decimal ps-5 space-y-2">
                                    <li>
                                        Pemesanan/pembelian Produk dianggap
                                        berhasil atau selesai setelah Anda
                                        melakukan pelunasan pembayaran dan
                                        Soulofjakarta.id menerbitkan dan
                                        mengirim ke Anda, surat konfirmasi
                                        pemesanan/pembelian (“Surat
                                        Konfirmasi”). Apabila terjadi
                                        perselisihan atau permasalahan, maka
                                        data yang terdapat pada Soulofjakarta.id
                                        akan menjadi acuan utama dan dianggap
                                        sah.
                                    </li>
                                    <li>
                                        Dengan menyelesaikan
                                        pemesanan/pembelian, maka Anda dianggap
                                        setuju untuk menerima:
                                        <ul className="list-decimal ps-5 space-y-2 mt-3">
                                            <li>
                                                Email yang akan Kami kirim tidak
                                                lama sebelum tanggal pelayanan
                                                yang Anda pesan, memberikan Anda
                                                informasi tentang Produk yang
                                                Anda pesan/beli, dan menyediakan
                                                Anda informasi dan penawaran
                                                tertentu (termasuk penawaran
                                                pihak ketiga yang telah Anda
                                                pilih sendiri) yang terkait
                                                dengan pemesanan dan tujuan
                                                Anda, dan{" "}
                                            </li>
                                            <li>
                                                Email yang akan Kami kirim tidak
                                                lama setelah tanggal pelayanan
                                                untuk mengundang Anda untuk
                                                melengkapi formulir ulasan
                                                pengguna Produk Kami. Selain
                                                dari konfirmasi email yang
                                                menyediakan konfirmasi pemesanan
                                                dan email-email yang telah Anda
                                                pilih sendiri, Kami tidak akan
                                                mengirimkan pemberitahuan (baik
                                                yang diinginkan maupun yang
                                                tidak), email, korespondensi
                                                lebih lanjut, kecuali jika
                                                diminta secara khusus oleh Anda.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Anda diwajibkan untuk memperhatikan
                                        syarat dan ketentuan Produk yang terkait
                                        dengan:
                                        <ul className="list-decimal ps-5 space-y-2 mt-3">
                                            <li>Pembatasan usia, </li>
                                            <li>
                                                Diperlukannya reservasi dan/atau
                                                konfirmasi terlebih dahulu
                                                sebelum kehadiran,{" "}
                                            </li>
                                            <li>
                                                Adanya tanggal tetap (fixed)
                                                yang tidak bisa diubah ,{" "}
                                            </li>
                                            <li>
                                                Ketidakhadiran (no show) oleh
                                                Anda dan keterkaitannya dengan
                                                pengembalian dana ,{" "}
                                            </li>
                                            <li>
                                                Pembatasan pengalihan atau
                                                perubahan nama pada Surat
                                                Konfirmasi,{" "}
                                            </li>
                                            <li>
                                                Dokumen yang harus dibawa pada
                                                saat penukaran Surat Konfirmasi,{" "}
                                            </li>
                                            <li>
                                                Kartu kredit asli yang dipakai
                                                saat pemesanan/pembelian yang
                                                harus dibawa pada saat penukaran
                                                Surat Konfirmasi. Anda
                                                sepenuhnya bertanggung jawab
                                                dalam hal Anda lalai
                                                memperhatikan dan/atau tidak
                                                memperhatikan syarat dan
                                                ketentuan tertentu tersebut.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Beberapa Produk memiliki kewajiban untuk
                                        melakukan reservasi terlebih dahulu
                                        sesuai dengan syarat dan ketentuan yang
                                        diberlakukan oleh Mitra Penyedia atau
                                        Kami. Anda bertanggung jawab sepenuhnya
                                        untuk mengikuti pengaturan tersebut.
                                    </li>
                                    <li>
                                        Kecuali ditentukan lain oleh Mitra
                                        Penyedia, tiket hanya dapat digunakan
                                        oleh yang namanya tercantum pada Surat
                                        Konfirmasi.
                                    </li>
                                </ol>

                                <br />

                                <p>
                                    <b>HARGA PRODUK</b>
                                </p>
                                <ol className="list-decimal ps-5 space-y-2">
                                    <li>
                                        Kami selalu berupaya untuk menyediakan
                                        harga terbaik atas Produk untuk dapat
                                        dipesan oleh Anda. Harga yang tertera
                                        mungkin memiliki syarat dan ketentuan
                                        khusus, sehingga Anda harus memeriksa
                                        sendiri dan memahami syarat dan
                                        ketentuan khusus yang berlaku terhadap
                                        suatu harga atau tarif tertentu sebelum
                                        Anda melakukan pemesanan. Anda juga
                                        perlu memeriksa dan memahami ketentuan
                                        mengenai pembatalan dan pengembalian
                                        dana yang secara khusus berlaku untuk
                                        Produk dan/atau harga tertentu.
                                    </li>
                                    <li>
                                        Harga yang tercantum belum termasuk
                                        pajak, pungutan, biaya dan ongkos
                                        lainnya yang akan Kami uraian secara
                                        tegas pada aplikasi, website atau Surat
                                        Konfirmasi dari Kami. Terkadang harga
                                        yang Kami peroleh dari Mitra Penyedia
                                        dalam mata uang Negara lain, dan Kami
                                        berupaya untuk mengkonversi harga sesuai
                                        dengan mata uang yang Anda pilih, dengan
                                        kurs konversi yang terbaik yang dapat
                                        Kami peroleh dengan ketentuan dalam hal
                                        terdapat permintaan pengambalian dana
                                        maka akan menggunakan nilai konversi
                                        pada saat pembelian Produk tersebut.
                                    </li>
                                    <li>
                                        Harga yang ditampilkan dapat berubah
                                        berdasarkan keadaan tertentu. Walaupun
                                        sangat kecil kemungkinannya namun Kami
                                        dapat membatalkan, menolak atau merubah
                                        pemesanan Anda dalam hal terdapat
                                        penyesuaian ataupun kesalahan Mitra
                                        Penyedia Kami yang dapat menyebabkan
                                        perbedaan informasi atas produk milik
                                        Mitra Penyedia Kami pada aplikasi,
                                        website dan Layanan Kami (contoh harga
                                        ataupun fasilitas yang diberikan).
                                        Sebagai akibatnya, Kami dapat
                                        menyesuaian pemesanan yang Anda buat
                                        atau Kami akan melakukan pengembalian
                                        dana atas biaya yang dibayarkan kepada
                                        Kami. Keputusan akhir adalah diskresi
                                        Soulofjakarta.id
                                    </li>
                                </ol>

                                <br />

                                <p>
                                    <b>PEMBAYARAN</b>
                                </p>
                                <ol className="list-decimal ps-5 space-y-2">
                                    <li>
                                        Pelunasan atas harga pembelian merupakan
                                        syarat untuk mendapatkan Produk dari
                                        Mitra Penyedia Kami.
                                    </li>
                                    <li>
                                        Kami menerima pembayaran dengan sistem
                                        pembayaran menggunakan kartu kredit
                                        (VISA, Master Card, American Express dan
                                        JCB), Virtual Account, transfer antar
                                        rekening serta antar bank ke rekening
                                        bank Soulofjakarta.id, dan metode
                                        pembayaran lainnya sebagaimana tercantum
                                        di aplikasi atau website.
                                    </li>
                                    <li>
                                        Untuk melindungi dan mengenskripsi
                                        informasi kartu kredit Anda, Kami
                                        menggunakan fasilitas teknologi "Secure
                                        Socket Layer (SSL)";
                                    </li>
                                    <li>
                                        Dalam hal terjadi kasus penipuan kartu
                                        kredit atau penyalah-gunaan sistem
                                        pembayaran oleh pihak ketiga manapun,
                                        maka kejadian tersebut harus segera
                                        dilaporkan ke Kami dan perusahaan/bank
                                        penerbit kartu kredit Anda, untuk Anda
                                        memperoleh penanganan lebih lanjut
                                        sesuai dengan prosedur dan aturan yang
                                        berlaku.
                                    </li>
                                    <li>
                                        Apabila berdasarkan pertimbangan kami
                                        terdapat indikasi penyalahgunaan atau
                                        penipuan (fraud) pada kartu kredit Anda
                                        dalam melakukan transaksi di platform
                                        Soulofjakarta.id, maka Soulofjakarta.id
                                        berhak untuk melakukan pembatalan atas
                                        transaksi pembelian Produk atau
                                        melakukan pemblokiran terhadap fitur
                                        pembayaran menggunakan kartu kredit pada
                                        saat melakukan transaksi tanpa adanya
                                        pemberitahuan. Soulofjakarta.id tidak
                                        memiliki kendali atas setiap kebijakan
                                        dari bank penerbit kartu kredit,
                                        Soulofjakarta.id menyarankan agar Anda
                                        atau pelanggan untuk berkoordinasi
                                        secara langsung dengan bank penerbit
                                        kartu kredit.
                                    </li>
                                    <li>
                                        Soulofjakarta.id memiliki hak untuk
                                        melaporkan kepada pihak yang berwenang
                                        dalam hal ditemukan adanya indikasi
                                        penyalahgunaan, penipuan atau tindakan
                                        melanggar hukum lainnya sehubungan
                                        dengan setiap kegiatan yang terjadi pada
                                        platform Soulofjakarta.id.
                                    </li>
                                    <li>
                                        Anda wajib memperhatikan secara teliti
                                        instruksi pembayaran yang Kami berikan.
                                        Kekeliruan pembayaran yang Anda lakukan
                                        sebagai berikut:
                                        <ul className="list-decimal ps-5 space-y-2 mt-3">
                                            <li>
                                                Pengisian nomor rekening Kami
                                                maupun nomor Virtual Account
                                                yang Kami tentukan untuk setiap
                                                pemesanan yang Anda lakukan;
                                                dan/atau{" "}
                                            </li>
                                            <li>
                                                Kesalahan melakukan nominal
                                                pembayaran atas pemesanan Anda,
                                                yang mengakibatkan berpindahnya
                                                dana Anda ke rekening atau
                                                Virtual Account yang tidak
                                                sesuai dengan instruksi
                                                pembayaran yang Kami berikan
                                                ataupun terdebetnya rekening
                                                bank Anda <br />
                                                sejumlah nilai nominal yang
                                                tidak sesuai dengan instruksi
                                                pembayaran yang Kami berikan,
                                                sehingga mengakibatkan tidak
                                                terkonfirmasinya pesanan Anda,
                                                maka Anda dengan ini mengetahui
                                                dan menyetujui bahwa Kami tidak
                                                memiliki kewajiban untuk
                                                melakukan pengembalian dana
                                                kepada Anda sebagai akibat dari
                                                kekeliruan ataupun kelalaian
                                                yang Anda lakukan sendiri dengan
                                                tidak mengikuti instruksi
                                                pembayaran yang telah Kami
                                                berikan, sehingga dengan
                                                demikian kerugian tersebut
                                                menjadi resiko dan tanggung
                                                jawab Anda sepenuhnya. Selain
                                                itu, kekeliruan pembayaran
                                                sebagaimana disebutkan di atas
                                                tidak dapat dianggap sebagai
                                                pembayaran yang sah atas pesanan
                                                Anda, sehingga Anda harus
                                                melakukan pembayaran sesuai
                                                dengan instruksi pembayaran yang
                                                telah Kami berikan untuk
                                                mendapatkan konfirmasi terhadap
                                                pesanan yang Anda lakukan.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Kami menerima pembayaran yang dilakukan
                                        dengan gift voucher, gift card dan/atau
                                        bentuk lainnya yang secara resmi
                                        diterbitkan dan diterima oleh Kami.
                                        Namun dalam hal terjadi pembatalan
                                        pesanan Produk karena alasan apapun,
                                        maka pengembalian dana hanya akan
                                        sebesar pembayaran dengan nilai nominal
                                        yang Anda bayarkan ke Soulofjakarta.id
                                        pada saat melakukan transaksi
                                        pemesanan/pembelian Produk , sedangkan
                                        nilai yang dibayarkan secara non-tunai
                                        seperti dalam bentuk gift voucher, gift
                                        card dan/atau bentuk lainnya tersebut
                                        menjadi hangus atau tidak dapat
                                        dikembalikan.
                                    </li>
                                    <li>
                                        Atas setiap pemesanan/pembelian yang
                                        dapat Kami konfirmasi, Kami akan
                                        mengirim Anda Surat Konfirmasi via email
                                        yang berisi uraian Produk dan
                                        pemesanan/pembelian yang Anda buat serta
                                        konfirmasi pembayaran. Anda
                                        bertanggung-jawab untuk mencetak dan
                                        menjaga informasi yang tertera pada
                                        Surat Konfirmasi yang Kami kirim. Surat
                                        Konfirmasi ini merupakan dokumen yang
                                        sangat penting dan Anda wajib membawa
                                        cetakan dari Surat Konfirmasi ini pada
                                        saat Anda akan menggunakan atau
                                        mengambil Produk yang Anda beli. Kami
                                        atau Mitra Penyedia dapat untuk menolak
                                        memberikan Produk atau pelayanan, jika
                                        Anda tidak dapat membuktikan bahwa Anda
                                        telah secara sah melakukan pemesanan dan
                                        pelunasan atas Produk, dan Anda dengan
                                        ini membebaskan Soulofjakarta.id dari
                                        segala tanggung-jawab atas setiap
                                        kerugian yang timbul akibat tidak dapat
                                        digunakannya Produk tersebut.
                                    </li>
                                    <li>
                                        Konfirmasi yang Anda terima dari Kami
                                        setelah Anda selesai melakukan pemesanan
                                        dan sebelum melakukan pembayaran adalah
                                        acuan bahwa proses transaksi pembelian
                                        sedang terjadi. Anda hanya dapat
                                        melakukan pembatalan setiap saat sebelum
                                        pembayaran dilakukan. Atas pembayaran
                                        Produk yang telah Anda lakukan, mohon
                                        menunggu hingga Anda menerima Surat
                                        Konfirmasi. Dalam hal Surat Konfirmasi
                                        tidak segera Anda terima, jangan
                                        batalkan atau ubah pemesanan Anda dan
                                        segera hubungi Customer Service Kami
                                        untuk penjelasan lebih lanjut.
                                    </li>
                                    <li>
                                        Dalam hal Anda melakukan pembayaran
                                        dengan kartu kredit, Anda menegaskan
                                        bahwa semua permintaan pengembalian dana
                                        yang diajukan kepada Soulofjakarta.id
                                        adalah bentuk dari persetujuan yang
                                        tegas dari Anda untuk
                                        menolak/melepaskan/menghentikan
                                        permintaan yang Anda ajukan kepada bank
                                        penerbit kartu kredit atas transaksi
                                        yang sama. Soulofjakarta.id memiliki hak
                                        untuk membatalkan permintaan
                                        pengembalian dana yang telah dikabulkan
                                        oleh Soulofjakarta.id atau voucher yang
                                        telah diberikan Soulofjakarta.id dalam
                                        hal ada pengembalian ganda.
                                    </li>
                                    <li>
                                        Dalam hal Anda meminta adanya perubahan
                                        atau pembatalan pada transaksi, Anda
                                        setuju bahwa Soulofjakarta.id dapat
                                        menyesuaikan atau membatalkan manfaat
                                        yang Anda dapat dari transaksi tersebut.
                                    </li>
                                </ol>

                                <br />

                                <p>
                                    <b>PERUBAHAN DAN PEMBATALAN</b>
                                </p>
                                <ol className="list-decimal ps-5 space-y-2">
                                    <li>
                                        Kecuali secara tegas dinyatakan lain
                                        dalam Syarat dan Ketentuan Umum ini atau
                                        ditentukan secara terpisah sesuai
                                        kebijakan Mitra Penyedia, semua
                                        pembelian Produk di Soulofjakarta.id
                                        tidak dapat diubah, dibatalkan,
                                        dikembalikan uang, ditukar atau
                                        dialihkan ke orang/pihak lain.
                                    </li>
                                    <li>
                                        Dengan melakukan pemesanan atau
                                        pembelian Produk di Soulofjakarta.id,
                                        Anda dianggap telah memahami, menerima
                                        dan menyetujui kebijakan dan ketentuan
                                        pembatalan, serta segala syarat dan
                                        ketentuan tambahan yang diberlakukan
                                        oleh Mitra Penyedia. Harap dicatat bahwa
                                        tarif atau penawaran tertentu tidak
                                        memenuhi syarat untuk pembatalan atau
                                        pengubahan. Anda bertanggung-jawab untuk
                                        memeriksa dan memahami sendiri kebijakan
                                        dan ketentuan pembatalan tersebut
                                        sebelumnya.
                                    </li>
                                    <li>
                                        Tata cara pengajuan perubahan dan
                                        pembatalan atas pesanan (jika ada)
                                        diatur dalam Surat Konfirmasi maupun
                                        media lainnya yang dapat Kami perbaharui
                                        dari waktu ke waktu.
                                    </li>
                                    <li>
                                        Untuk setiap pembatalan pesanan yang
                                        Anda lakukan dan/atau pembatalan yang
                                        dilakukan oleh Mitra Penyedia, Kami akan
                                        melakukan pengembalian dana dengan
                                        ketentuan sebagai berikut:
                                        <ul className="list-decimal ps-5 space-y-2 mt-3">
                                            <li>
                                                Pengembalian dana dilakukan
                                                dengan jumlah dan waktu sesuai
                                                dengan kebijakan dan ketentuan
                                                pembatalan yang diberlakukan
                                                oleh Mitra Penyedia dan/atau
                                                Kami dari waktu ke waktu.
                                            </li>
                                            <li>
                                                Jumlah dana yang dikembalikan
                                                kepada Anda tidak lebih besar
                                                dari jumlah nominal yang Anda
                                                bayarkan kepada Kami pada saat
                                                Anda melakukan transaksi
                                                pembelian Produk
                                                Soulofjakarta.id, disesuaikan
                                                dengan kebijakan yang
                                                diberlakukan oleh masing-masing
                                                Mitra Penyedia dan/atau Kami.
                                            </li>
                                            <li>
                                                Untuk transaksi yang
                                                pembayarannya menggunakan kartu
                                                kredit, maka pengembalian dana
                                                dilakukan melalui kartu kredit
                                                yang Anda gunakan pada saat
                                                transaksi Produk
                                                Soulofjakarta.id dengan
                                                memperhatikan ketentuan yang
                                                diatur oleh bank penerbit kartu
                                                kredit.
                                            </li>
                                            <li>
                                                Untuk transaksi yang
                                                pembayarannya bukan menggunakan
                                                kartu kredit, maka pengembalian
                                                dana akan dilakukan ke akun
                                                milik Anda atau pelanggan sesuai
                                                dengan syarat dan ketentuan yang
                                                berlaku.
                                            </li>
                                            <li>
                                                Kami akan meneruskan setiap
                                                pembatalan pesanan yang Anda
                                                lakukan kepada Mitra Penyedia.
                                                Kami memerlukan waktu untuk
                                                mendapatkan kembali pembayaran
                                                yang Anda lakukan sebelumnya,
                                                yang telah Kami teruskan kepada
                                                Mitra Penyedia. Oleh karenanya,
                                                Anda memaklumi setiap waktu yang
                                                Kami butuhkan untuk
                                                mengembalikan dana tersebut
                                                kepada Anda.
                                            </li>
                                            <li>
                                                Proses pengembalian dana
                                                sepenuhnya merupakan hubungan
                                                hukum antara Anda dan Mitra
                                                Penyedia, dalam hal ini Kami
                                                hanya bertindak sebagai agen
                                                penjual yang meneruskan
                                                permintaan Anda kepada Mitra
                                                Penyedia. Anda sepenuhnya
                                                bertanggung jawab jika Mitra
                                                Penyedia karena sebab apapun
                                                juga atau secara hukum tidak
                                                dapat melakukan pengembalian
                                                dana kepada Anda. Anda dengan
                                                ini membebaskan Soulofjakarta.id
                                                dari segala tuntutan dan
                                                kerugian yang mungkin Anda
                                                derita sebagai akibat dari
                                                pembatalan yang dilakukan oleh
                                                Mitra Penyedia dan/atau
                                                ketidakmampuan Mitra Penyedia
                                                untuk mengembalikan dana Anda.{" "}
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Anda menyetujui bahwa Kami hanya dapat
                                        memproses pengajuan pembatalan yang
                                        sesuai dengan syarat dan ketentuan
                                        pembatalan yang diberlakukan oleh Mitra
                                        Penyedia, Syarat dan Ketentuan
                                        Penggunaan Soulofjakarta.id, Syarat dan
                                        Ketentuan e-Refund serta syarat dan
                                        ketentuan lainnya yang berlaku pada
                                        aplikasi dan website Kami. Untuk itu,
                                        Anda membebaskan Kami dalam hal terdapat
                                        kerugian yang Anda derita akibat dari
                                        pengajuan pembatalan yang Anda lakukan
                                        dan/atau pembatalan yang dilakukan oleh
                                        Mitra Penyedia serta kelalaian Anda
                                        dalam memenuhi ketentuan syarat dan
                                        ketentuan pembatalan yang diberlakukan
                                        oleh Mitra Penyedia, Syarat dan
                                        Ketentuan Penggunaan Soulofjakarta.id,
                                        Syarat dan Ketentuan e-Refund serta
                                        syarat dan ketentuan lainnya yang
                                        berlaku pada aplikasi dan website Kami.
                                    </li>
                                    <li>
                                        Walaupun sangat kecil kemungkinan Kami
                                        membatalkan atau mengubah pemesanan
                                        sebagaimana terdapat dalam Surat
                                        Konfirmasi, namun dalam hal terdapat
                                        kejadian tersebut, maka Kami akan
                                        memberitahu Anda secepat mungkin atau
                                        sesuai dengan waktu yang ditentukan oleh
                                        Kami. Dalam hal pembatalan atau
                                        perubahan apapun terkait pesanan
                                        tersebut dilakukan atas dasar
                                        kebijakan/keputusan dari Mitra Penyedia,
                                        hal tersebut adalah di luar kendali
                                        Kami. Oleh karenanya, tanggung jawab
                                        Kami hanya terbatas pada pelaksanaan
                                        pengembalian dana sesuai dengan arahan
                                        serta syarat dan ketentuan yang
                                        ditetapkan oleh Mitra Penyedia dan
                                        peraturan perundang-undangan yang
                                        berlaku.
                                    </li>
                                    <li>
                                        Dalam hal Mitra Penyedia mengalami
                                        keadaan dimana tidak bisa menyerahkan
                                        atau menyediakan Produk, maka Anda
                                        tunduk pada syarat dan ketentuan Mitra
                                        Penyedia atau pihak yang ditunjuk untuk
                                        bertindak untuk dan atas nama Mitra
                                        Penyedia.
                                    </li>
                                    <li>
                                        Baik Soulofjakarta.id maupun Mitra
                                        Penyedia kami tidak dapat
                                        bertanggung-jawab ataupun menanggung
                                        kerugian Anda, dalam hal Kami tidak
                                        dapat menyerahkan Produk atau memberi
                                        Layanan kepada Anda, sebagai akibat dari
                                        hal-hal yang terjadi akibat keadaan
                                        memaksa atau yang di luar kekuasaan Kami
                                        atau Mitra Penyedia untuk mengendalikan,
                                        seperti, namun tidak terbatas pada:
                                        perang, kerusuhan, terorisme,
                                        perselisihan industrial, tindakan
                                        pemerintah, epidemik, pandemik, bencana
                                        alam, kebakaran atau banjir, cuaca
                                        ekstrim, dan lain sebagainya.
                                    </li>
                                    <li>
                                        Jika Anda tidak mendapatkan Produk
                                        sesuai dengan Surat Konfirmasi, maka
                                        Kami akan merekomendasikan Produk yang
                                        sejenis dengan harga yang sejenis atau
                                        setara dengan Produk yang Anda beli,
                                        tanpa ada beban biaya tambahan, atau
                                        memberikan uang Anda kembali secara
                                        penuh dengan syarat dan ketentuan yang
                                        diatur oleh Soulofjakarta.id dari waktu
                                        ke waktu.
                                    </li>
                                    <li>
                                        Dalam hal Anda melakukan pembayaran
                                        dengan kartu kredit, Anda menegaskan
                                        bahwa semua permintaan pengembalian dana
                                        yang diajukan kepada Soulofjakarta.id
                                        adalah bentuk dari persetujuan yang
                                        tegas dari Anda untuk
                                        menolak/melepaskan/menghentikan
                                        permintaan yang Anda ajukan kepada bank
                                        penerbit kartu kredit atas transaksi
                                        yang sama. Soulofjakarta.id memiliki hak
                                        untuk membatalkan permintaan
                                        pengembalian dana yang sebelumnya telah
                                        disetujui oleh Soulofjakarta.id atau
                                        voucher yang telah diberikan
                                        Soulofjakarta.id dalam hal terdapat
                                        pengembalian ganda.
                                    </li>
                                    <li>
                                        Dalam hal Anda meminta adanya perubahan
                                        atau pembatalan pada transaksi, Anda
                                        setuju bahwa Soulofjakarta.id dapat
                                        menyesuaikan atau membatalkan manfaat
                                        yang Anda dapat dari transaksi tersebut
                                    </li>
                                </ol>

                                <br />

                                <p>
                                    <b>KEAMANAN</b>
                                </p>
                                <ol className="list-decimal ps-5 space-y-2">
                                    <li>
                                        Pada saat Anda membuat pemesanan atau
                                        mengakses informasi akun Anda, Anda akan
                                        menggunakan akses Secure Server Layer
                                        (SSL) akan mengenkripsi informasi yang
                                        Anda kirimkan melalui aplikasi atau
                                        website Kami
                                    </li>
                                    <li>
                                        Walaupun Soulofjakarta.id akan
                                        menggunakan upaya terbaik untuk
                                        memastikan keamanannya, Soulofjakarta.id
                                        tidak bisa menjamin seberapa kuat atau
                                        efektifnya enkripsi ini dan Anda
                                        sepenuhnya bertanggung jawab atas
                                        masalah yang terjadi akibat penggunaan
                                        yang tidak sah atas akun
                                        Soulofjakarta.id milik Anda yang timbul
                                        dari informasi yang Anda sediakan.
                                    </li>
                                    <li>
                                        Anda wajib memastikan bahwa perangkat
                                        atau device yang digunakan untuk login
                                        menggunakan akun Soulofjakarta.id Anda
                                        berada di bawah penguasaan Anda. Untuk
                                        itu, Anda membebaskan Kami dari segala
                                        kerugian yang timbul dan mungkin timbul
                                        akibat kelalaian Anda sehubungan dengan
                                        perangkat atau device yang Anda gunakan.
                                    </li>
                                    <li>
                                        Anda menyadari bahwa kerahasiaan akun
                                        Soulofjakarta.id Anda merupakan tanggung
                                        jawab Anda sepenuhnya. Untuk itu, Kami
                                        menyarankan Anda untuk mengganti secara
                                        berkala password yang Anda gunakan untuk
                                        akun Soulofjakarta.id Anda.
                                    </li>
                                </ol>
                                <br />

                                <p>
                                    <b>AKUN ANDA</b>
                                </p>

                                <ol className="list-decimal ps-5 space-y-2">
                                    <li>
                                        Untuk keperluan pendaftaran dan
                                        pembukaan akun Anda, Kami akan
                                        mengumpulkan dan memproses informasi
                                        pribadi Anda, seperti nama Anda, alamat
                                        surat elektronik (email), dan nomor
                                        ponsel Anda. Anda setuju untuk memberi
                                        Kami informasi yang akurat, lengkap, dan
                                        terbaru dan setuju untuk memberi Kami
                                        bukti identitas yang akan Kami minta
                                        secara wajar.
                                    </li>
                                    <li>
                                        Hanya Anda yang dapat menggunakan akun
                                        Anda sendiri dan Anda menyatakan dan
                                        menjamin bahwa Anda tidak akan
                                        mengizinkan pihak lain untuk menggunakan
                                        identitas Anda atau akun Anda dengan
                                        alasan apa pun, kecuali diizinkan oleh
                                        Kami atau Anda.{" "}
                                    </li>
                                    <li>
                                        Anda tidak dapat mentransfer akun Anda
                                        ke pihak lain mana pun. Anda dengan ini
                                        menyatakan bahwa Kami akan dibebaskan
                                        dari tanggung jawab atas kerugian
                                        ataupun kendala yang timbul atas
                                        penyalahgunaan akun Anda yang
                                        diakibatkan oleh kelalaian Anda,
                                        termasuk namun tidak terbatas pada
                                        meminjamkan atau memberikan akses akun
                                        kepada pihak lain, mengakses link atau
                                        tautan yang diberikan oleh pihak lain,
                                        memberikan atau memperlihatkan password
                                        atau email kepada pihak lain, maupun
                                        kelalaian lainnya yang mengakibatkan
                                        kerugian ataupun kendala pada akun Anda.
                                    </li>
                                    <li>
                                        Anda harus menjaga keamanan dan
                                        kerahasiaan kata sandi akun Anda dan
                                        identifikasi apa pun yang Kami berikan
                                        kepada Anda untuk semua aktivitas yang
                                        terjadi dalam akun Anda. Dalam hal
                                        terjadi pengungkapan kata sandi sebagai
                                        akibat kelalaian Anda, dengan cara apa
                                        pun yang mengakibatkan penggunaan akun
                                        atau identitas Anda secara tidak sah,
                                        pesanan yang diterima dari penggunaan
                                        yang tidak sah tersebut akan tetap
                                        dianggap sebagai pesanan yang valid dan
                                        Kami akan memproses pesanan tersebut.
                                        Anda dengan ini menyatakan bahwa Anda
                                        membebaskan Kami dari tanggung jawab
                                        atas kehilangan, kerugian dan/atau
                                        kerusakan yang timbul dari
                                        penyalahgunaan akun Anda.
                                    </li>
                                    <li>
                                        Kami tidak akan meminta username maupun
                                        password milik akun Anda untuk alasan
                                        apapun. Oleh karena itu Kami menghimbau
                                        Anda agar tidak memberikan data tersebut
                                        maupun data penting lainnya kepada pihak
                                        yang mengatasnamakan Kami atau pihak
                                        lain yang tidak dapat dijamin
                                        keamanannya.
                                    </li>
                                    <li>
                                        Jika Anda tidak lagi memiliki kendali
                                        atas akun Anda, Anda diharuskan untuk
                                        segera memberi tahu Kami (mis.: akun
                                        Anda diretas dengan cara apa pun atau
                                        ponsel Anda dicuri) sehingga Kami dapat
                                        memblokir sementara dan/atau
                                        menonaktifkan akun Anda dengan benar.
                                        Harap perhatikan bahwa Anda bertanggung
                                        jawab atas penggunaan akun Anda dan akan
                                        bertanggung jawab atas akun Anda
                                        meskipun disalahgunakan oleh orang lain.{" "}
                                    </li>
                                    <li>
                                        Kami memiliki hak penuh untuk memblokir
                                        sementara, menghapus, atau menonaktifkan
                                        akun Anda atas dasar kebijakan Kami
                                        sendiri dan untuk alasan apa pun tanpa
                                        memberikan alasan atau tanpa memberikan
                                        pemberitahuan untuk memblokir,
                                        menghapus, atau menonaktifkan akun Anda.
                                        Alasan pemblokiran, penghapusan, atau
                                        inaktivasi akun Anda dapat mencakup
                                        tetapi tidak terbatas pada:
                                        <ul className="list-decimal ps-5 space-y-2 mt-3">
                                            <li>Pelanggaran ketentuan ini, </li>
                                            <li>Larangan dalam peraturan, </li>
                                            <li>
                                                Penipuan atau pencurian
                                                (termasuk indikasi atau dugaan
                                                adanya penipuan atau pencurian),
                                                kecurigaan aktivitas kriminal,{" "}
                                            </li>
                                            <li>
                                                Pemesanan yang mencurigakan,{" "}
                                            </li>
                                            <li>
                                                Pemberian informasi yang tidak
                                                akurat, salah atau menyesatkan,{" "}
                                            </li>
                                            <li>
                                                Perilaku, ancaman, atau
                                                penghinaan yang tidak pantas,
                                            </li>
                                            <li>
                                                Penolakan untuk memberikan
                                                informasi,{" "}
                                            </li>
                                            <li>
                                                Sulit dihubungi/dijangkau, atau{" "}
                                            </li>
                                            <li>
                                                Anda terdaftar pada "daftar
                                                hitam" atau "daftar pantauan"
                                                oleh pemerintah atau organisasi
                                                internasional.
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        Anda setuju bahwa segala resiko dan
                                        akibat atas pemblokiran, penghapusan,
                                        atau inaktivasi akun Anda akan menjadi
                                        resiko Anda. Kami memiliki hak untuk
                                        melakukan segala tindakan yang
                                        diperlukan untuk mengurangi resiko
                                        dan/atau kerugian Kami.
                                    </li>
                                    <li>
                                        Dengan pembukaan dan penggunaan akun di
                                        aplikasi atau website Kami, maka Anda
                                        membebaskan Kami atas segala tanggung
                                        jawab, kehilangan, dan/atau kerugian
                                        yang timbul akibat penggunaan akun Anda,
                                        serta jika Kami melaksanakan segala
                                        tindakan yang Kami anggap perlu dalam
                                        pelaksanaan ketentuan akun sebagaimana
                                        diatur dalam poin diatas.
                                    </li>
                                </ol>
                                <br />

                                <p>
                                    <b>KEBIJAKAN PENGGUNAAN DATA</b>
                                </p>
                                <ol className="list-decimal ps-5 space-y-2">
                                    <li>
                                        Kami menganggap privasi Anda sebagai hal
                                        yang penting.
                                    </li>
                                    <li>
                                        Pada saat Anda membuat
                                        pemesanan/pembelian di website atau
                                        aplikasi Soulofjakarta.id, Kami akan
                                        mencatat dan menyimpan informasi dan
                                        data pribadi Anda. Pada prinsipnya, data
                                        Anda akan Kami gunakan untuk menyediakan
                                        produk dan memberi layanan kepada Anda.
                                        Kami akan menyimpan setiap data yang
                                        Anda berikan, dari waktu ke waktu, atau
                                        yang Kami kumpulkan dari penggunaan
                                        produk dan layanan Kami. Data pribadi
                                        Anda yang ada pada Kami, dapat Kami
                                        gunakan untuk keperluan akuntansi,
                                        tagihan, audit, verifikasi kredit, atau
                                        pembayaran, serta keperluan keamanan,
                                        administrasi dan legal, reward points
                                        atau bentuk sejenisnya, pengujian,
                                        pemeliharaan dan pengembangan sistem,
                                        hubungan pelanggan, pemberitahuan
                                        program promosi, campaign dan informasi
                                        lainnya dengan mengirimkan Anda
                                        newsletter atau push notification secara
                                        otomatis, termasuk namun tidak terbatas
                                        melalui surat elektronik, WhatsApp,
                                        serta melalui media sosial (seperti
                                        YouTube, Instagram, Facebook, Twitter,
                                        Tiktok, Line, Tumblr, Telegram, Reddit,
                                        Snapchat, LinkedIn, dan lain-lain) dan
                                        membantu Kami di kemudian hari dalam
                                        memberi pelayanan kepada Anda.
                                        Sehubungan dengan itu, Kami dapat
                                        mengungkapkan data Anda kepada group
                                        perusahaan di mana Soulofjakarta.id
                                        tergabung di dalamnya, Mitra Penyedia
                                        Produk, perusahaan lain yang merupakan
                                        rekanan dari Soulofjakarta.id,
                                        perusahaan pemroses data yang terikat
                                        kontrak dengan Kami, agen perjalanan,
                                        badan pemerintah dan badan peradilan
                                        yang berwenang, di jurisdiksi mana pun.
                                    </li>
                                    <li>
                                        Dalam semua transaksi penjualan Produk
                                        Soulofjakarta.id, Soulofjakarta.id hanya
                                        bertindak sebagai penyalur Produk yang
                                        disediakan oleh Mitra Penyedia. Khusus
                                        untuk transaksi penjualan produk
                                        asuransi, untuk menghindari adanya
                                        keragu-raguan, Anda atau pelanggan
                                        dengan ini memahami bahwa hubungan hukum
                                        terkait penyelenggaraan produk asuransi
                                        adalah antara pelanggan dengan mitra
                                        penyedia produk asuransi. Untuk itu,
                                        semua mitra penyedia produk asuransi,
                                        bertanggung jawab atas penyelenggaraan
                                        produk asuransi miliknya dan juga
                                        terkait pelaksanaan kewajiban
                                        kerahasiaan data pribadi sesuai
                                        ketentuan perundang-undangan yang
                                        berlaku yang diberikan oleh Anda atau
                                        pelanggan untuk pembelian produk
                                        asuransi milik penyedia produk asuransi.
                                        Hal ini termasuk namun tidak terbatas
                                        pada data-data milik pelanggan yang
                                        diperlukan sehubungan dengan pengajuan
                                        asuransi dan klaim.
                                    </li>
                                </ol>
                                <br />

                                <p>
                                    <b>KETENTUAN LAIN</b>
                                </p>
                                <ol className="list-decimal ps-5 space-y-2 pb-5">
                                    <li>
                                        Syarat dan Ketentuan Umum ini tunduk
                                        pada hukum Negara Republik Indonesia.
                                    </li>
                                    <li>
                                        Akan ada keadaan dimana syarat dan
                                        ketentuan untuk beberapa Produk berada
                                        di laman terpisah. Dalam hal terdapat
                                        perbedaan antara syarat dan ketentuan di
                                        laman lain dengan Syarat dan Ketentuan
                                        Umum ini, maka Syarat dan Ketentuan Umum
                                        ini yang akan berlaku.
                                    </li>
                                    <li>
                                        Seluruh perselisihan yang terkait dengan
                                        Syarat &amp; Ketentuan akan diselesaikan
                                        secara musyawarah dan apabila tidak
                                        dapat dilakukan penyelesaian secara
                                        kekeluargaan maka penyelesaian
                                        perselisihan dilakukan Badan
                                        Penyelesaian Sengketa Konsumen di
                                        Jakarta, tanpa mengurangi hak
                                        Soulofjakarta.id untuk mengajukan
                                        gugatan di pengadilan manapun di seluruh
                                        Indonesia.
                                    </li>
                                </ol>
                                <br />
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

export default TermsCondition;
