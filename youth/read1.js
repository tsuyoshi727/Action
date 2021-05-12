/*
更新时间: 2021-02-28 09:03
Github Actions使用方法见[@lxk0301](https://raw.githubusercontent.com/lxk0301/scripts/master/githubAction.md) 使用方法大同小异

点击几篇文章和视频，自动获取阅读请求，在Github Actions中的Secrets新建name为'YOUTH_READ'的一个值，拷贝抓包的请求体到下面Value的文本框中，添加的请求体越多，获得青豆次数越多，本脚本不包含任何推送通知

多个请求体时用'&'号或者换行隔开" ‼️

*/

const $ = new Env("中青看点阅读")
//const notify = $.isNode() ? require('./sendNotify') : '';
let ReadArr = [], timebodyVal ="p=9NwGV8Ov71o%3DgW5NEpb6rjb84bkaCQyOq-myT0C-Ktb_mEtDEGsOrBruuZzIpWlevTEf2n4e6SDtwtHI8jh7tGLFm1iscPtbZwlhO1--2rPMqEVay5SHQZ0Xa5om9y_QnFioIoDSg-ArtrfwznZt1IhRAOspLNm4F1Z4mRILDUTDM9AS-u45jBCudTEUwd-eZ0htdPFgFTaOODCojX7sWjAmCl0M7pSg7CLA4z4aky1dn-Ga1ZzOibaOvrVVdZD1HyMaSdonlYkeip-gEcYzHml_S4GNLEDq15jypOdVIWttVvEq0PL5NbtdyMA6fvauFO147-zLB-FhjjyqF3hZSslMKe1isgWhqnCrd0hTt5cenaHE7n_MEXA9w33jFhKk6k3lf0bxYdDOuytfAx6SyuVzw1YifNStPXZx1mMtMkqHe7hj98QtEgSaS70N_UQFz855Uv_fMToUho7HIXiGJ5B4ditQPa_dQ5yyCQOkMXSUewwjEcfWhe6Wp547hYSkCO1OqRh294gDgxCgi4odTDfqCGHim7TTTvTZgFqQ4Pphogtd4BGDJcTiz5f9P9R5LUm6iuiVFaYfwfnf_8kbnpaE1n7tTC4f9A9KZ3eAKE5bXC0qipMzIGenb22njC3wk-cfAcJ-T8S9JeaRBEAT09Pgc1d--QMJd38cMTsMA7de-laGzs3kM1bgDaO-CeNpX9whqugKfQIBwCdPJ1McIquAzgp_l87BfKfMdnRuvcwTWRaDRHyY9m9ArWbHsToEuF3yl5nlSyXbMu_gw5VUHeZSztE7W--3gJfOcSIlhhA7MEw19_vQfFbvglQPyjLxYIIWXsm9ryILPOB8_QYm7vU%3D";
let YouthBody = "p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm75LbK-B2sK3D78qpO6rg_ieD33-fjwZEQOJRPN02dEYMt0VnFfXbdBsPDRb2dMCNAjEGpeNUQCj_Ag3-P1FPPli4OOuKdnlNUTMKFiLIE-bxyPVnRMM5uCwBFui0XyKM3Q1LXteDhP0vvyJbsNtC7xBYz4L-8Mah2xlv1t46Or1dFlFSMxEHtJo4sI56GPMIJnZfdKiAEuhJQcRBai2UuLW2iFQyjKT6176lGgYB_vETExtvK0udNzNsxRwnVw6L8A7HpMljLKNRNwrzzSYFJK2NvShwXhdpzzqECaex7Q_6RWXGblZVYCiCW8Prl9I7oF0b0mh5BgnKonqs9TjFiJ_Q-n7Q0bax5Q1OjOfJC3NOKJr85OZ9E4P4rKBGNyv6vYPBKP9nGc04CH40YMIxM3Zdn2KSOfpGRgfU9BG9x7JomoB1HB2oVw0jr03TGvDt4Ibo8w57VOs-xtGq3nbZiYuGyX0MEdYHiX30p7RRUk0KMaWM12yjmDNqa3E8yMw4qioJ_rM0tdcpWM0Vy70bqLSeBmuuTePzvSBMbp7rEmW5A86LfwEJwnP2qbSzE51gTE_EHdiAtUjj0TyqtE7tC0icLg9XIqnacs8ftq527xC5IAn0QvY-LRXgBK9wHnErDqJ3UMpU3A94vs4y436Bmm4S-NGS_i6GPvX54_GbwoqG6K8UiXAJEQ3Z8_iaGTXb_Z-1W4d_5&p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm75LbK-B2sK3D78qpO6rg_ieD33-fjwZEQOJRPN02dEYMt0VnFfXbdBsPDRb2dMCNAjEGpeNUQCj_Ag3-P1FPPli4OOuKdnlNUTMKFiLIE-bxyPVnRMM5uCwBFui0XyKM3Q1LXteDhP0vvyJbsNtBRA_KZiLw48ZJTceZHGMdMfE-vIe2m7MNf7rr-S9tOTQRjJgiOr_J2TBWmimy_T1awewmwP_r1KXNq5ak1NozkTYkkFkjbPwNY3kwr_0Sp1VCVx2EpvawP8XmyiayQI_jPPcKQfROj7mRrvT1xGa1H_2_8Syp0yvtXbpgFIl-PRR1-5If1u00F2P3tfOrUs76BaV4nTywIz78kAlmLBrtVBiqNcUG7YHxNsbd351nadhF2Lz1VhY_PtM--8nKv_S7nqOvkhS0ajIj9QEW0vktSyk5NGuqaTUEwhxgmZO8uY6Q2RtllnnbTZZf8IfQGPUeSGG5XYIF56QbtWRlr_7UbGm_Ll4dF5NT2viL1Jih3SG_3KaoIxXvGwdHLzYjS7QnunAq9CMNKMwcSqwQFZPn8U5_KuJDuRnzBIZ0l9fqdcDtxq6w6N89nEXscXOBOr8AyRKvN67pBedxND70YWhhcAU7NUQx3T4aeMY3NzNnf04Kj57ICHEuj8JPYD4erS1DWac9PtzGxUF9xzSji3UWESgh9TX5E5WxEwXhKKIu82d1bXybMkUqP&p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm75LbK-B2sK3D78qpO6rg_ieD33-fjwZEQOJRPN02dEYMt0VnFfXbdBsPDRb2dMCNAjEGpeNUQCj_Ag3-P1FPPli4OOuKdnlNUTMKFiLIE-bxyPVnRMM5uCwBFui0XyKM3Q1LXteDhP0vvyJbsNtBPzjExCCDcH-QJBAjYLhcJ8EMI2TScqo4wabbPiISFthHYpvxo68YEKr5vnjPcamKZ3xPUKLQn7YcHLvSIlDxbZp8RAK8EosLrflp63Q4cE7NBb1SXGLDISBxE3_XUkbKhSeBkPxah2C5pozO3xRNozQifv9bUvTCtsQ5J4tavxVs2SQIOt9wuN4POueLrM0EJVaaMxSo6r6PwrfsDzYjtaOFa196im5MhSHnVhvdnBSQegEjm8JeWJYbi5f0aPIm9iWDH4Cpkrxv9Rr4Un8MZZeFjHiVXRP2y48oVdflsrN_HKsxcsgjF8SNOdnXWNQWjjfOAaWS-akScbLACg7VcjQ1_LilvT-4T4fP6bZpMvv1Yod7fuVzrpLZEQRGdLiCTV6TmnqrsEpavdjKYXB5fxF1zGextX2cl_FyI62i3yYDB1n8nKav2pBb392WNAzfCK9g8wYNm0BmiBbBmMVRCaeZMeOdcawsS_DnMscDamBX-XYz9bagsgF38LDXvfWQVfsQ9qt5xAJczIz3Occ05ZzywM5EAnfIcnkJ22NefeJz9b7M4D6vj&p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm75LbK-B2sK3D78qpO6rg_ieD33-fjwZEQOJRPN02dEYMt0VnFfXbdBsPDRb2dMCNAjEGpeNUQCj_Ag3-P1FPPli4OOuKdnlNUTMKFiLIE-bxyPVnRMM5uCwBFui0XyKM3Q1LXteDhP0vvyJbsNtB3bESzrXAoc0pyhwHAHp4_5pWtXkhTi_YjSrxyOl0nkqwtDnG98DvRsLV39BTUzWILWuOQr6hoLVDVKZCZKU6Uq9rXAkv6U1RNoObyTOVUKhj_v1YQ4JB_GeY_iE78jk8z9HMmV0BX2mj7F713py29JUCEBAWY7YBG10PXh5UXIq6TfVqWyH-uJwO8U5Xhyx5Kok0KBRvi3LJKKcbf1X6nGdji_1hyzk2xMvCNBzyJekFnlxVhymlAJpGoPSvtMQ5-2sP3bklW1MwYLgfHAHNZH32G5c9DeAvEpORmUpLczI_at_9GKeoqYRQ9eg2Rw5lRBmWpm1MdhiX-HUpOs1wSVVaqPtKQRyy9iuNQLzSv3MCBuiTR1cDrkuLhslGXyqWPL2gorpUQJFu0LCjMllaR50WRyzcrHwI8OvMcIAO95JmMuOfN26aACFfkPFH0bAffMtbAaHjL042kRRudGwhqHXDvsK0c7VPS-dazfjDOJ_dhpMggyvwSnB_7IgexVlog78sxHa-mZi6R37BxEBSwxMLYEY4m_3lJGmYR1iX7MgOHA8lKS8dz&p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm75LbK-B2sK3D78qpO6rg_ieD33-fjwZEQOJRPN02dEYMt0VnFfXbdBsPDRb2dMCNAjEGpeNUQCj_Ag3-P1FPPli4OOuKdnlNUTMKFiLIE-bxyPVnRMM5uCwBFui0XyKM3Q1LXteDhP0vvyJbsNtB_DxNCF0kBW8uOC43BiwXW3TuYypQ5ad4mKSpja0CoQIXQ6HAReuFZdJM8U9iAqSRX_ns0gnxF95ws1pUY54qTYkGwmuYcBMjWXEWKr4zdPnwgajQYVaCnz69nXcZzj5YOqo5avoD85pww2_xTENo_IaX9ryyVZSKTk8YAaoNmzouDycqOLeQ6iuo06y2m5uZqJO2HfZg8eDcMIXO7z2Rj9HhCZLWKRQ5K3voGj74JHMzXo7I0H8Sp22c80vCWUXtV3JzeeGbkQ1rkGZfNA1e7CD2wVYzxoZ_Gtw7a1XBA4ErnxIBeHxCN1g9PYjJlRz78rZcLJ9E_Vo0aT2djpR3yW9YLhUELG3X7uCDJwZnk1KHMEXV7VgZzyUfQBIjdMLA35PdFYtgfun6X6BLZkfB8RjthHDfDEMhVxCSA4qt6u4-sG2FokvhuvpIWzECKmXsTn9t41W1pUKQ0Cn3ktGiIU8ZmRu45495UD1T3BfRTtxZvECXivbwP2-F3UNvvjms5oFjyQFJuS6s_2WlC8-vSN4CPeC5zkyLjZNEBTiI0YBzjqcqBehNb&p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm75LbK-B2sK3D78qpO6rg_ieD33-fjwZEQOJRPN02dEYMt0VnFfXbdBsPDRb2dMCNAjEGpeNUQCj_Ag3-P1FPPli4OOuKdnlNUTMKFiLIE-bxyPVnRMM5uCwBFui0XyKM3Q1LXteDhP0vvyJbsNtCa_48JzuuXwl2IWT-FSrL3RkZ-3yuvcNxYMK3nBFE6qTtx8IzufHO6ivx1g-YtKGkQOu8mrF9GXXqQ_LsMz6SRVrrfnp4QDSap_0LuxZksQjr7DZx2szoJLblp4FFjaZ-gxxNioNzxw5_vxsTM6ZeWi7CF5H3QXRXRowpTTogHXojah1S7iZQn7ZCbSIelJxl4U6iMiydLeDJrt9GzVTazja53xTGNzF6mfdO5svrqpy5RjNQg4iZedOKQ9G5N5CFcmphNnE65Q8lfUGjnBH642LvGC10WEHg2VHF-dQnF03blJJtyj1HtOpZYvH33zi54S9VA525f_GmBQgdmoFgynTSw6-uPOpdGF04RIq-UzoYj05whR9LlHmZGKFZ6-lkOrVAUasR_DJQU6ZaQo-u8X4fHtTv6QdzyG7BEp4278WDVv7RrvOCseaq8O9egztsPp_ewf3Yj1bAOrBROuO5qq4jbqEjepFF8iXhdVqy2YjkM0xwWtJ0CrUcNNPN_qMyfu68UwISVrkjq7oU1vObWcDjiQo-M6p5o6KHhhSwWGqixwijF_Yb4&p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm75LbK-B2sK3D78qpO6rg_ieD33-fjwZEQOJRPN02dEYMt0VnFfXbdBsPDRb2dMCNAjEGpeNUQCj_Ag3-P1FPPli4OOuKdnlNUTMKFiLIE-bxyPVnRMM5uCwBFui0XyKM3Q1LXteDhP0vvyJbsNtAWAPCG62Syoh6jL6EpWa-ZCKZPn7E2qEZi4tAMzEHRwUqg9StPs8hvrY4DR6s_K4yAZN7J1uRDliHYQ7JDsud1eqOHyygikCQIejVqKF1xiGj3JBqk48zALNem1mAIU0nBFDimFO6AxFBihORZpfK9u0kix8erK9Bp_kDmu8oI8dwQ8aaJKsecETQwyBA1n5b9AL_Ii4D1Yw0EaYD4s8vXMLnZhWsuNOWTvE-CSTQgJaItPh5mJOv4UZwYyavA1eD5jeKcyn45-kpSg9oHURuT4bt73_q5agQ8nmdbXy1osa2tXgVKWuHIAdi_9y7BZOfklR2htK8FKgM3PXPD-_kxX9aDvtcxkFz8BL-ep5WLn6E9PHmntw6uG4wNN9O-ibAFA-rwZbFsSrrTis5DRXTCMja1Ho6D8z62-rmD2iojXLU-tvI86eMmM2KIWJ8Cg_Ievru3KLa3vw-OtlqJ9VaOufjxsDdiGj2sHJyNhWKv2ptY7DO6dSO6tjWc7e_THeKHtthB158cDOZALJgE35P2Psu4_GLyLduBHip4GFn9KhFVU_xstJE4&p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm75LbK-B2sK3D78qpO6rg_ieD33-fjwZEQOJRPN02dEYMt0VnFfXbdBsPDRb2dMCNAjEGpeNUQCj_Ag3-P1FPPli4OOuKdnlNUTMKFiLIE-bxyPVnRMM5uCwBFui0XyKM3Q1LXteDhP0vvyJbsNtDMmjJmU-ORml71pKD68PYaqPHmcESZLV8v_P7sSw5sS6SujzP3WayxEuGy0ljjk8vq_YXir_At-QQ8xf6B6Wnh31LC1IWnCprZ6xKs8nB2gPeJqssb8aneImRVHQ3gLYLNzROJCbtwl60xirCiwk1BN4JxT-Ge-QdvJdGSX5C5TpZydfv-Pxg9ThYYduXtBGqicyqQwnDSWwduL0Jij-NQi1WOJyxRWBpyY6DWll5knBNC92ZSOY9lGdhbjrNOT3RqedaW03eMnwVaAvyE2nLqYXNpaKG9_ZxLblNlOt4iOowVayV7ihXuy39lyMYoTxVh5F1ChNDAWyLl6EnNVAGwiV6CCyiCM7vua10VDVa_z9-A1UvyATAcQmdC_vWORudCB5QTtTomWDrF32hvH6LVcaamdKA_As8anDzCkyjqgvSuXVYQ7iQSSE8th5FjMYUxRJUWbrBM6387gSFFJuDc0KB4-ZU6YwyOxmH5ibmp1CwV4D1A5fi7eTa0MKudCT6pSpSdNldDx6t9At3Dhy0ftkewqQOSReZ-wEFetLzw-nPcy14Epokz&p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm75LbK-B2sK3D78qpO6rg_ieD33-fjwZEQOJRPN02dEYMt0VnFfXbdBsPDRb2dMCNAjEGpeNUQCj_Ag3-P1FPPli4OOuKdnlNUTMKFiLIE-bxyPVnRMM5uCwBFui0XyKM3Q1LXteDhP0vvyJbsNtA8shejnafvKHjxR-11CLsH4osInstN82vgNF-qYveSpTbhjbrpHzxkEAxOPS4TsUb695PLnnQrx92XDlRM4GR-2L6JfL7VpqOq4UGIWgVTS-5W8zDCgh-vPBWMq1nh2YJr6KgywMXffHLzzuS9CxGdyIXYF1Bg6-6lNTjMxdY8M6kAbRtShAMbU17Lje_OqVyckoTIe-SgeaHWuq0Hmkg56Fr2kePHZPI2e0VUb4Q950ruE8i2AMCVNJLstQbvcnYYAyE8l1U3ICVP5MsxV_M8KkZ2awn3nD0h0nRN_PJndUQz-eC6FVNVrFMde2VrMLj4kaEXwmfcDQ11ApvQq9PrNhLh1HVT8N1iJiMNf8o46TWHB13p0FX6Z36Qrvsrdu4piiqkMK6NOUZmuSWjVe_PoYqgZhLTB-07cenKuQCSPRw2wSCLwiCv0sN7wzXIwS4FIof8Svkd96VxAo58kJtPdsUHdYvJpBWbcdu3PnelI_6fFAehpzUFZ8NcWj7aTaNSMtQKxzx-Conwjv65dvr87hqwbfWClpErK3YK7LO_uS7qqxgL8BTV&p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm75LbK-B2sK3D78qpO6rg_ieD33-fjwZEQOJRPN02dEYMt0VnFfXbdBsPDRb2dMCNAjEGpeNUQCj_Ag3-P1FPPli4OOuKdnlNUTMKFiLIE-bxyPVnRMM5uCwBFui0XyKM3Q1LXteDhP0vvyJbsNtAQtovQgJ4b3N9qS9oHZrkEXdLAluaLvp5BHn8L6DdjGch7bBFdPQsyDFe9BWor8f3vewJ2Hg9gZpvoMzhfCHS3zPTUk5sHOuXl2lD_EQ3fJd7k0q5bjHIVh1ECF3LtFzHBWY_YAIEk8etGsvzdzi7L152KDk6bURmCqicyxsW1WVpCIQ5y8ywPHGIj4N18lEx0t5eHqDiAomMC2uGspBp1j-cUK56Px8GX8UGT7qysNyAHZMdYsFtw2n0ZV2qwCNHeuv2Qmw-Wca2x5HRjQPjiJtJs0K9lc7EmOvTQWZO_aoNKhmdixDrdK20ReVBo1eq9e5GGqrZikRcGIRsFBS22idivZDBUurrFFgBTmdIuy8JXw0qb-_wY63F7R-T6yVbYfzonCv3TNFRA6NP-EBD91D0RJOxDDe72_j0Jph-g6yCIFd9lAVposwKUM_-VuHTCd9UHcAQE5zEHq0hk_ZyqWwA4BPAlZeq4WwI2a6SYuL4c-CP7RjD6rxm9IfWyTzRJ4F5-zRXT5uZHzxqSsqvb0_7AJ91fkKJSiaC6Jx9HtlwN9_70Bzp2&p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm75LbK-B2sK3D78qpO6rg_ieD33-fjwZEQOJRPN02dEYMt0VnFfXbdBsPDRb2dMCNAjEGpeNUQCj_Ag3-P1FPPli4OOuKdnlNUTMKFiLIE-bxyPVnRMM5uCwBFui0XyKM3Q1LXteDhP0vvyJbsNtAMtj7BAeQNYEKRljnwQgnLPYWZbAdj4hEIXhxjnpezPN67NusFDwPraJlJRfkDLjhqg3OXUoatakyAb0K8MoeQcUNls2v9EcwZh2dJzEfUT8VurWYzUWKJUbaHguBlo7SGIkUbeyo405JJWjC3M2QdTFYUIvKY-BGJ4Cf4NEk-F-Z3lpnA4xWagz6mEJGZIyeKUL8tKFpC3Cb1uoecxMpGvChuZH43Ekq6bagH5EwNULa6DMecupT4Dz-uJATw5BZ4ms2O44HAqQefUBO4sgNJYS9uG885xysz4uD_8yLl8ooRxgc3KIKBUinlwD9JbHPcQzouYuyAqjMOffj9svrpYLW-peRA2YvJgbWfK8luPAI3d0ltkskB4Zv7K_cg4m3vn7DEgFnkha4YZGT4-VBTYF0HR3cNK8HefmeboHdyKPk9AoCmKgIHksIWAqqB4G7iZQR7lm_rn5hZ6FEJOB_LRGEsdv3q9dUolpH-BJ_Y2_N2o-BMYGXC5AfqF1EKAC9lJ4QbFI3MfRQMuqNhEpP9WxZBxaThiygIxdh80Y_ighj4945CkfjK&p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm75LbK-B2sK3D78qpO6rg_ieD33-fjwZEQOJRPN02dEYMt0VnFfXbdBsPDRb2dMCNAjEGpeNUQCj_Ag3-P1FPPli4OOuKdnlNUTMKFiLIE-bxyPVnRMM5uCwBFui0XyKM3Q1LXteDhP0vvyJbsNtBI8KH_xD2hZnTn4eznAIVnV36GCQn_cfIJ6RHjRSwscx15ZmmPlGvITB70yu81f2IAFty6N3KVtiWnRgmzVneEEKqFnR88dyMJeP7uQn7RjD5ZUbdjlRVgxK1KtiorNZXczkTEhcq01SZK9Om2pwXOlSMhol4OdUaiLK2und0Mhe-O2hNHDYIiAJSuj0ndVxXL0XDmloi6XABiR-k-np5TTDTXhj0ewhT4dJ2e6ShsqiHpNwXFtNW8KjEaAglqcZpXUHLlLzcvAfO0a1oIKHy-pCml9XLLmxU43NsjmQ2TocDFJbKAhg9EVG4ni_aVWBabnZ4sSavrRy2p3MXbdssgvuutIU0FKNifvYKyP8AmmTzku4ZcG2AHQLpjxP4IvqZZ8GG-i3NrYrdy4vF810YEWhDbuwwD5bjl1fue5EBl_1CtsuITw-5bS1P50No6voJlq4HWW9_ASEsJyWCF6fxYEN-_ewaTZ_cY75_16uloAdNaQw6FJ1bZu7BSFuhmv5Dd_xNzpMGqERDufzDtmMyKs0W8TP8EEVW_SvIbwiHAJTFpgkk9eaHc&p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm75LbK-B2sK3D78qpO6rg_ieD33-fjwZEQOJRPN02dEYMt0VnFfXbdBsPDRb2dMCNAjEGpeNUQCj_Ag3-P1FPPli4OOuKdnlNUTMKFiLIE-bxyPVnRMM5uCwBFui0XyKM3Q1LXteDhP0vvyJbsNtC0dsvRBojvd_H7vYKTCR_yImxWLyXc-4fd18cToIK18GwpOR-ivz6YRIVaTn96PbBzqJNi8CmPU6Y8XIGNRMoBRdkDz5aJl-k8cehvnpTFP9Y_FtXAx0w9jM20GjqpY_iSpO4iVAiR3Fuc6xuyWXRmvGNrd6NSktNQU4hetiXnMGuPXtH2zkDJ7CoZA42XroPE74j074ho68FQDTi4EEdfyWSqC33po77_zNk7oyaHGJNmoKGevaabjnEfIFMgS5tHdGmOOd_w2iOeNAfoQc3SXKc9TVcrRoYSm_BWln6NXRXKAAcEUHL06S3Nu7BDwZVRRE6GFbY3M1r4AJOAlzAZOHg6Gpln4YhHbRGAdb7hSJBUqNa0lekuSD26-5ZwVLLvEJXOPymBku-C8AimErGcy5yBKnSOm1coYRT0Luap4KhgM4wP8INu7Cef7nuBiwIPBSw0rWvVDZ9Why-TcWEg9qFq_U-98eFMXPY3gOOQFwAEipk7qJUIz9_Jxk7uGqG-9x6vMfklJYdvwizVo8s2Iy2f0djZHlDT31MatkNrHkMSeP8qI3w4&p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm75LbK-B2sK3D78qpO6rg_ieD33-fjwZEQOJRPN02dEYMt0VnFfXbdBsPDRb2dMCNAjEGpeNUQCj_Ag3-P1FPPli4OOuKdnlNUTMKFiLIE-bxyPVnRMM5uCwBFui0XyKM3Q1LXteDhP0vvyJbsNtAxCTlKGHs3OXotVWJ8dAR8TciPXwdakbXbxNenKvYj3b_V8nS1uTCjyi_7XycL4rTsFOcBbft6elj99-GbdYbqZbgkl7V8TOuV9SUSYkmOeHoB-67LSOu_xcp2VSwuvQHLZI52SPBHHGfGgTtYi8H6S9QrbI7HgwHhONsaIIPwCQ36-pykwO9p_6dcC9O6nyuEU4uWV8P-GW0iJlEZmP5djsMSFvrvEkUe_lJmfKCUw0Luu6YT0pnJNFiQo62nKJiRu6_JT10LejlElOp1zcV0mO-AkNEe5hni7Lt9Ad7jTlf10Bv6bt_zRAEZoilSnf9W7XhgjrWBANQCJ-X51_O--034MSLUcuH6Wq2ZY6VSKJz8KDcn3Hh0lhYymkqZ960NdPqfjS-astmmBORqT99FkThLUNhuwoZattnAGGehkoFs-E0J-eBQdJDk2ntj1D28lgbnzscxP55kF4uWDgviX5UoHA_ltd5hKRLgiewceiEg5Gh2PiWx2dmmFY3kAhgNdtYHCxra9-azA3jIduOz0_6uhT8-5OWfr_OhvFLKbcHwMgzlzDwA&p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm75LbK-B2sK3D78qpO6rg_ieD33-fjwZEQOJRPN02dEYMt0VnFfXbdBsPDRb2dMCNAjEGpeNUQCj_Ag3-P1FPPli4OOuKdnlNUTMKFiLIE-bxyPVnRMM5uCwBFui0XyKM3Q1LXteDhP0vvyJbsNtAA7z7BkXxnObBDeTsnf7-nOL6OVYeNaZqNfAXzswNwCwtkFrf8Za3PDf_JkTOCbPEputgr8bSqfwV640Cb_jVoyuDotXCpKi1KpxRi_VaoI3pb2Q6TQdMFb5lG8ru6OGIGeyPvqCqjtqcGm5rZIRcUpaZAVZAaMROkEq7zaBE63GsNWpM7XT7wjN4b4fSHy8NfA3eFdL4Hft9R3vFPNhcbTY25sAJLSdVHVYgj0FsV5lf8vVHkziBmMLhJLB1IyngPq9oidxwaL8Yfq9LPM9O_-2V56eGt-5nJOPqzeNHi7lIcuJr2tZDsqb6-PZxMMXlXJc76KxI_duMxhMk3DuX1XS4Jra9LI8xUv6k-Skrw_Dm67ripRQlWWrDBANXSMLX_FgNo4HYqZXLNTDpZyaSGXxFV33G6Uao6_ByudprdITVV0vb1O9AzF-e8rLBs8RMj6X-xhvOL5_56zXdn_qLqz6WxJHbBue0Ql83-2tEqXl2Drglh9jel5V5WYwYMgllmFRnTNaVf45084GxEUemZ8VPoF887W8MtOPaY6XKwGuOIyDEKCEet&p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm75LbK-B2sK3D78qpO6rg_ieD33-fjwZEQOJRPN02dEYMt0VnFfXbdBsPDRb2dMCNAjEGpeNUQCj_Ag3-P1FPPli4OOuKdnlNUTMKFiLIE-bxyPVnRMM5uCwBFui0XyKM3Q1LXteDhP0vvyJbsNtDpf_Rt9VY9o1BpR38kxAsxovt_aOmd4t3AMmDOI4v1AljOyHs6sDviO3UoEm4pbkCqrEIgM-HHVYtJpiMI4l44pDsnaV6Oyu14oXk_An1IsponXi2jDGP3wx2rq2WeUW6rLIN1UqsQ_81NJfNCxQP23kUdM7rlheT-C092ufniUXUZNkFpImDDK_2OXvdXiSLdgA1U5oWdPIUPZhBjxtO_e96hJWm6roLUnjyuTyhjTYwAm-zWG3e-iH1XPpDEo3HZPDqr_jLUAmgRQ2TKOl38eOc2QoexEcuifhzNy-ppfUe0Ij9DAlkfOv5X3cg3-ix3BqKRdsOpnfzmwtDY2s1a17OMQKQiFRY2dROtY_SQ3RY9ClydSakzNfR7p1LvyPna52SC_qiskKlQrkQ84n_ECzzUT2tjkUvV0eFxUBS4qismLe7giHHiLBsWanxymOSB5VUWc4XuIXw3J2wZ44o7OA0zqmlox7IQJWNUk-1GyhwoY59KCzOjLRmXByVsImEgR1Go8NmRlSsCIXUh8xfenT3M7DJrekyaUVJ5398sA1nKywK7hfgO&p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm75LbK-B2sK3D78qpO6rg_ieD33-fjwZEQOJRPN02dEYMt0VnFfXbdBsPDRb2dMCNAjEGpeNUQCj_Ag3-P1FPPli4OOuKdnlNUTMKFiLIE-bxyPVnRMM5uCwBFui0XyKM3Q1LXteDhP0vvyJbsNtAVAxpMTUuu40ndrC6ENSqHuja7H74-XjlupbZI-qreB6Zv9xbteOWh17hyGQbUghsdLD4uuinhu9nZiUZf7DKDqyX-nLe0JonG0VqNcJWunukdgwR-ZD5rrtWKzSEl0PJjf6h33A6BM2enudiHsHIdEinwBpTCMZUXNpFbs9yaQywBpHX9a-1jL_H8sfJ_g3upAq4lGHQ3AAvZeC6oTH3re6x-N-NrKr6xbMp0iYAWLIB3a3FmNIHxg7tGMQG5uIkdnBSf82wQ4-tv2peZWUBKhi4xsvT4IShkd_MibkgVs6U4r9dX6n8IuWa0L0TI1viCn6nHsxPSV8c5N975-yYGdg1KB9jBxrMrBL_uoJc5cXaffz8GHQ9S5z1MXqSBLZXtImsSsqKCWIrWHlNqteAp9xPuViNLroplfQfGZc2xghkgKEV42XzXInWQeDnBsO6BYJW6JreBaAM3CMxdHMtkfcseDh7ZuiR-f4F6TkWzNVtXuDKXzELRM0RGRii5QLhf3jMC7M3XYU2fOpB33o7e0pQ9Xxg40p-nX4_hPqe5qkSfi5TJOn--&p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm75LbK-B2sK3D78qpO6rg_ieD33-fjwZEQOJRPN02dEYMt0VnFfXbdBsPDRb2dMCNAjEGpeNUQCj_Ag3-P1FPPli4OOuKdnlNUTMKFiLIE-bxyPVnRMM5uCwBFui0XyKM3Q1LXteDhP0vvyJbsNtCbfRCVkb1CQhZL2R7Y6-yP3-VL4ZZzxWmSH105BkAwV9bwZPJErw2r522TRWYKdKfR1MhSAGZiaNvsIqlHoED0peo_QWFMtaK59whouMGIwCJDYnW54IB_LL3h8-lNWD-yhEjVtV399Xw5qe0ENV59rlgbyATRH3VdYpKF9T6NKuecLFptDDDEKtcfRnwptHl6GGNejDFJNpjfrD0zewx3sq_dfw4Mmiiumnj1Cb7m7zHCx8xy5t8dnkXyJoOqwISeUha6EnOFIVLxSPXnj8ZXZSAW_IneRK_o95AZVs0Z9GJoWnIVTLVBvHWv4sJdUaYzO0iv2VaIYr2LYck5V-GpWWttM_SbVavuaerV-smhCEdNEx6KFtsi1IhNBUFI96J4huJwDdvaYpQ8cBKI9aVMh0zAvV-L7Pslv9x3L7HQGbRQPA3KEFcUeXLaZyDPFjsANJ43rAEAgjKVBVTqC2SmTICWDi3Oa3NK9NKFKN-Gbfm0Aj90bMPCJvgIN7lSmBMF5365ExAER9_1VH7GT963G13Tk3jVcdgoerMNIO9VJYYRUJu2bhlp&p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm75LbK-B2sK3D78qpO6rg_ieD33-fjwZEQOJRPN02dEYMt0VnFfXbdBsPDRb2dMCNAjEGpeNUQCj_Ag3-P1FPPli4OOuKdnlNUTMKFiLIE-bxyPVnRMM5uCwBFui0XyKM3Q1LXteDhP0vvyJbsNtBJwhMD0iWNvG-XhplisJRKVN-_Jz5xUVeJvktbQ4hf5EwAU0rXIIKi2WUG8pyBVnjEHoAXIaxOwQN3jPnxu2ioy1PeUjdorS5ddRq_XonVXw3nyJxSfP9Rl3-vAnqBmZSokgqGCorkpVwwNgCi5b-LRWGheP2m1-1GSBMpXDIptszwRBbQYMyJyfpDOYgDoUXruwUYW0n2e4MykKMMuE37abQ-4WpfSReZyNRceXZpZLGZjN9emmV69fbpPDbrQJ07WuEyHehtHkb9bPCnyWMd-j5sKN_XWt0RZrb75cew2f_0qjEi9Bi8JadtNt_-mEg85VwIh9c4MlvLONbiPRaobpnE8tyuy7-06VXu_-B1YbxXaPH6Y-q7G7AOmlwbyR__-UK6zRntoBT7oGaYlMtDH_q46bUN-QL7pmB4igWR_sjkcOJd44r_Fp4TVD7kw8GFEOLaKY0ZNZeDccLVJEsS0EybwXaUVIapLiaxmD2ScZ7kOil-_apnITSiWvxrws2VGUDxotLb3D6I_Ez3muzUUQyZvQLNtgWsjxkaUYN0KsvwjGmU6862&p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm75LbK-B2sK3D78qpO6rg_ieD33-fjwZEQOJRPN02dEYMt0VnFfXbdBsPDRb2dMCNAjEGpeNUQCj_Ag3-P1FPPli4OOuKdnlNUTMKFiLIE-bxyPVnRMM5uCwBFui0XyKM3Q1LXteDhP0vvyJbsNtBkXL1v2Gx8i130gQVfCvcLoUAah3FHl7mSWQiPKrQwbDHOXmxvozLhDAZ6BmrBPko7eOB1Hzvf6hxKSavphZWL4ymjkcGoOMAjNL0w6ZI-jLR6_DAIOhaEZ0XRhHkTe-A2DSPeDfHFLA8PDjL_P5sXs4hEaYbZ6J0OWMYKskBeRBJCNJBUlxf67vEp8QOwkQjvozLcTaDATSLYY2QaBcdyaFRJWEI3aYiNqgR7g05D0GPm4dLDvxsKXGzaicETs6yb7HkG4XlitYD4r6mLV6YThBTu791u49il963tBeBAuxGUCAYMXBVie5jXZxWAOHHO2X574Ef7FpU-CKsfwbOyIfrYO1RDoT3K6_N8D6gnLspbSzxDyWsQ4GdUYizQ5AboSBbIcHe6PrdCvpICZDJi5Xwbm-a1PplwY3-NkvGrN2SEzzDiPgcoLNfJDK6Pf0EY-h1u0eEc6hke6NlEIcK4dQuWFmHg3aYhYA4RLgkTUvgHyy6kSR5BL-4rmEcO4Rc0RCx8fUIUVWBSEz03QkO0sRrDcLD3KCb8sKzn8Hv_6PjjaCLphMlA&p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm75LbK-B2sK3D78qpO6rg_ieD33-fjwZEQOJRPN02dEYMt0VnFfXbdBsPDRb2dMCNAjEGpeNUQCj_Ag3-P1FPPli4OOuKdnlNUTMKFiLIE-bxyPVnRMM5uCwBFui0XyKM3Q1LXteDhP0vvyJbsNtAH-dpo5EMeZEpnDt9sLHbbE0F6Zol45nJlrMv3K7qNn7iMYW6cfGjQ8ZF0Alf7RBJ20qG6ii-HqFl6vQgNEa0X_F1zmV_JQhA5-NLR-nkg6ASpgMzfUIg-YqgR5M3GnBp_QCHUZVqEGE-5A_jLE9gPoLjsou1SXYpiT4b_1EtesHRjgbORSrk-Zm5Sk01tjOWRXfHaF_rVTSTBqNHL-cmIE3p93V3x6OPSs10kAKyDKnCMqTw3ZtGpv3E3OCn-eDbQ8mwRQAup8IuwgHu2_jbxRDradID8z_VIspV1ZSuyp5IPdHoajeEC1Yhb7phD_PdiiYzMrjHx6GhkkUFfm4EZttUs57lPiCgDUxcgdBycvFwDug7pLKt0j2SFtf8STSpHCueji2gc2ThKYed3CYNtWq4JmJIDWDb8BT_Tb6jw0R4wHMiNLyPMxidX3ImY0UFg6Jlk0H803ai5gmGTr6OcJ4pMAe8kiy3-Z5u-YzFPDRihs0XHYCEqQQpRhpV31dz4l-c3QoMHtkA_kshVhDJKhfik451EM_tyY0pFyNKyYuyEM48o_n5v&p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm75LbK-B2sK3D78qpO6rg_ieD33-fjwZEQOJRPN02dEYMt0VnFfXbdBsPDRb2dMCNAjEGpeNUQCj_Ag3-P1FPPli4OOuKdnlNUTMKFiLIE-bxyPVnRMM5uCwBFui0XyKM3Q1LXteDhP0vvyJbsNtBx7d1TvtjyHh6gCUWwtyyXGlG9QIxaISPz2H1szs4IgAEFKAwt8QWpepq0ptEgOoUwiF_BG_Pcfmjxb9jSrFZz4UDLWRXPVJ799csUz-ncyPJCf1zYaLj2eeahzqDzpUBK3WlAJ2Ni8e9vlh9EoqubpP02cvlhdwgbtZKOsgEGCApUWlhtKHWSqyKBKeL0NHZTUoT9dj2nzV7OOL0DkkYvJd11VYzTK5thXPRTDnRnsKvRXAK1UxCGhT04FbjVmDEc4pTWhS6LCKg1UKzYoGlqnlT9OT-QaHHddnTuQDyo2rzPSJe2_Ah2PoOqwbVQZVKct3fFn4c8N4ebRMfP46kE01YxO0meyCx2xZltK52M4ggSDkMVNUgAPFyPK5JoUrqHefrs2MSR1fzAoDcGvu98z26EGtva46LeT389Kd2c-hNzV4oy9ArSBKXL2qwAazaqi28knSukYa4TxcsDWCXv9dfTTfrKNfxAwcDicALYWd3zpqhS6vANNdrVGzKKt-pdaPN9HWT92OQ-83RsOYYDJ8YpB5f-IYWa3uoZJB3LldbQcMF3N0lz&p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm75LbK-B2sK3D78qpO6rg_ieD33-fjwZEQOJRPN02dEYMt0VnFfXbdBsPDRb2dMCNAjEGpeNUQCj_Ag3-P1FPPli4OOuKdnlNUTMKFiLIE-bxyPVnRMM5uCwBFui0XyKM3Q1LXteDhP0vvyJbsNtCIwXXMAgKMEbzaSOEPxnt7xliVbj9sW4sQSQ8L00hqhRYmJ2ncl1CEC3K5x_KA1cgM0tXomnFSpp1wvKcdbE9zj7VE20fgs6-Ld9FeRP6ACrLHk-zWCZCVLv21za7JRkRoIVbeXaPzvOwEFwNU0JvncnvVta4dqSa0pR4XEVg0AomMjODimyL_tJOlqURAA31KU2KdkK1UMZKMqbRGYBRCrsG8reKNoX6OMRxsp6oCX4-4t8mxoIKpM6aGhq9F-VDNcl20Ulvj5lOth2xv9Ou5K-qwHE8mpsEtiDMm8OXmqcW3kiNzIfqodhv1VeR1d0W0gDU0umERPMjYgCokBw6MWHJ2iPWNo6Gc6IWHY8P2Qv_hQbdtzVFwLj5yXBWpjd9tnvJjOc-2Rw6FQWByDwAPKahnKF6_Jk2GGq6LbTrKq314bD5Akq4F-k6HzwGM_3EQm85mnfgHRcZFkifdXxYNHoWyz0_AimW6WbedbQCCNDGWwt8yAITqBVtiztIaH2-ryoLwmUPnMd5pkMSGX-6vrQYHMv53z5kStDzxxny4IdvDXx97t_6j&p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm75LbK-B2sK3D78qpO6rg_ieD33-fjwZEQOJRPN02dEYMt0VnFfXbdBsPDRb2dMCNAjEGpeNUQCj_Ag3-P1FPPli4OOuKdnlNUTMKFiLIE-bxyPVnRMM5uCwBFui0XyKM3Q1LXteDhP0vvyJbsNtA02qekQBgCBwdweeT_zG13msfhffI__mqoz7d9jmxbJu7Cn1qkAwv7tyZUK5R0W8TWtVzdpMJ07GNryaOULs9RXboRUka4dyykzdKYBAJsJmLj8BKXrj630EGj3A1pH1FeU55-yOL96PPk1O15xH2kjzvj1iMAPV_UADx9njiFfEgpQJHZDJEb4MywMeL17uoABC33hpOELhYLGZGAWd9zY5OZRSrlT0m1MlnKC06OsLjeRTeL-tuqvjy4tEFXvx9WfYK02jg5aiSNSnL2qUUEs3wJOPR3TVvTIwuu5o2Jxpd9c-sccpOClXgxbZdC7gy7_NxXz_fo4XTi2kr0sKyzmAm-bEiwvoixjO4ErlFFZFSSInoUWJJuv3VVbCqxqsJ8hdaY4KmtNa8Re33zQJo1tgD6ajAB9v2BYy1aMzpWS_C8CYHA36lJuKU9leX43qU7PJA-SYDsX8ymWeaW06m3b39Ffo2_Hs6AuhvWntmOtFYMueLFKkb-LIgGnV33KB340lW_yM-NtGaLvtBYGW7QzbBNl9ceIqHk73iVzs5V-i5BPZpY4lvy&p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm75LbK-B2sK3D78qpO6rg_ieD33-fjwZEQOJRPN02dEYMt0VnFfXbdBsPDRb2dMCNAjEGpeNUQCj_Ag3-P1FPPli4OOuKdnlNUTMKFiLIE-bxyPVnRMM5uCwBFui0XyKM3Q1LXteDhP0vvyJbsNtAbrfu8MjjYcbScHnBKzprgSLumZ07ksjJJ46MijhkPOIX_IeU0QJzVZk6YJfHHl4URS6xgqqp6fqzFUdYUoBZP1P7M6r35u6klhCSzM28Q57pKXUOtV7XyASgdmSH6Ht5SNZNxbAhkcOvmUi-iROoKaU-gcsNd1582_eMVZQvSYKBqyXvSkqro4d5acQ5w5mECBP2P_9ip3i6HuT13RsFGgwxb1yoGGK7jSiUSUSkqjoxVrCDnEM1kxFvv0Z1SbwhtfIBI9XVoT_FOUe1tiai-leWK7fFxxL9CerQpi6Fa98vwRHtPsHxwPwQfxVqiTdtWN6K0K5j5JoIOVRiRTNxdY18DRq8q6MUJjEj_AQn0ZHmGojbQQ34DDSuCoI0f14ywRrWZMkQpL9cHzNlAB_GNQxx4YBQc7JHvB6PfGpy2F-pQOFkb2GbYfketpSwci2PTb_g5KBqmxlydMwtS5Ax326UyqSd-WZhoRAj1jpkYKq2SBLLjKsiIKJjH9JanYz4EoOscGfcN56TSEGJvFHcp16aNEQliaYmztZKTIAADyZCcuVGs1jjZ&p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm75LbK-B2sK3D78qpO6rg_ieD33-fjwZEQOJRPN02dEYMt0VnFfXbdBsPDRb2dMCNAjEGpeNUQCj_Ag3-P1FPPli4OOuKdnlNUTMKFiLIE-bxyPVnRMM5uCwBFui0XyKM3Q1LXteDhP0vvyJbsNtB_DxNCF0kBW7lBkfCwGyIcyo9bYMD6KRG1jwjyhY-6oCeSmtrO_-Xoxdp2n6PZdOzljWCUHjucY4NY3a4BtMQzOOfrVuOFlks8EcVTwT20KkQBh8wW4Qnl7XJzg39qY3-AqlF3irM-6HvKnHxllALqC6roZEpBhPJsWa81XQznS0QaEQObvpXE4YBiWnN90erH3SR7ULdp-ZD1W2TdBCHn0OCFXlHjnH3uxsTA-jTNGQz8tmQ_QvsrVKGliZ967YcnnWZ_nFTf0GEPoa0v-LG725RDq4dMQlLi-H1WPTelncG8pfby3gJUKa5M4bOIjRF-WzHWp6aEZz6QEHEw0hcpjFiOFZTm6EH3ZtaibDhnKLmhLLfrMFfbtjG_FgZMpKdlGhVIrHd-kIHKeRW_BmhkiJf44sZuKlrdlviqPRbF6bMJNCXIscAO0ok5mlCFkuncd6fhXqAjjkt5N4P1XEWrBCsxtBYMQ4BB6NZfFEoRntBl9zqD1IWQ1eyvRogsZpvx0FiRMcei_pqc2kE59TuwXk0c7osYvd4poFd1WgA7Pt9QwXMNRdBv&p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm75LbK-B2sK3D78qpO6rg_ieD33-fjwZEQOJRPN02dEYMt0VnFfXbdBsPDRb2dMCNAjEGpeNUQCj_Ag3-P1FPPli4OOuKdnlNUTMKFiLIE-bxyPVnRMM5uCwBFui0XyKM3Q1LXteDhP0vvyJbsNtB5tY1kKBxlKYa60HusFCzC0MRxnArpJhSEZeXQK8YsEWpTEX0p7roD3SiPWG1pu9fR0Bsjq0M_OrmxPkRXCMizH21SAg24GetYSocE63RQ4zXOS6OIEmmTBHnVA8kgco3oge7xTxeS7hbb5hQJVFYwebaQ3zygmwxQqeVvbnJ3BO91vKCmzvYMAZNi2TnM4MNDIoa_qrGp7nUzoXnEVLvp-E-kvDRZI2IUg5Xwhd0RDQG-kOihr6G_VtdWE6YPOlgWZ57HvxVaTnuOmr5Rg_Zag2M-PBv67mwKke1Lfp4H-1Ej7eXY8RInWpOb88U_mFvTrfcOV2Z001lE5mi0aSCozcXrjLbfi2YWN7xBfmT9RTnuQ_NGJKKxSn8PevNbg2OAxps9lkLSrulh8ll-aWCPHYkSRon9kQrTpQ0KWLzDgJTKn3tZqqbIZldur_aivJbanJbZ_eS2tkB6eEFYLyT5oEp87mv4_yU8y_xc-ElERAl6fLxoOhZqcCUWN2D0v_TyodoW47PVrP72CEqI4zOwwxD0ecT1CpYYf3qq_3uxKZZjU4f6oG7o&p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm75LbK-B2sK3D78qpO6rg_ieD33-fjwZEQOJRPN02dEYMt0VnFfXbdBsPDRb2dMCNAjEGpeNUQCj_Ag3-P1FPPli4OOuKdnlNUTMKFiLIE-bxyPVnRMM5uCwBFui0XyKM3Q1LXteDhP0vvyJbsNtB_DxNCF0kBW7PIXXRGz5ELdfYBZ_TQ2CMrpvYEUMDchMuS1y53TZAwJ0J02NmWPnfrdObvtqbYfBUWc4qe9q0-YLIC0s0AjsaMx9QdhLiaJF1c0N2mN6hpzrv9g5zwLB02x64iHz4rs_gnZcFaG4gDX6HSaQEPrtHDpKoJ5oxIz4Mbxj7b9rRBKLpJ-Zx2VbMdIMpbbmi3LKM44rjqgas4iudm5iWUrM8PrzXUcWozEce9ZMJDUYcv4X7rqfRm1XyHVBXctB921CJ7wkqDTW4SOXrp2no_Novt5ZCH3Et01FHZMl72k3-c17fZ4KN3gSJ-pxEh1yFaHVv9O53uq5AnefZawFl4i_qdy8Q0Rvg79RqhkEHu_pmyRKPKEjv3h3y4UAcYBjCWgYoKNZHcORaSSTG7rdlEced36olB2RitqbIXKJYl70uQ0sZGzWmdt_itT9HEpGJym5v3VSFDHhuF96yCYOu10T9KyPohL3WPMzlBpSqVX_LfTR2an0c_WWJKJ5bbe6Mi80FiSf5NShhBxJPZE3NH1IK9H7Qo1lF1GhxWuSEW3_sr&p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm75LbK-B2sK3D78qpO6rg_ieD33-fjwZEQOJRPN02dEYMt0VnFfXbdBsPDRb2dMCNAjEGpeNUQCj_Ag3-P1FPPli4OOuKdnlNUTMKFiLIE-bxyPVnRMM5uCwBFui0XyKM3Q1LXteDhP0vvyJbsNtD-7pJmjxcDMCNdllAmRM024w_Cr5Q_ycNwe0EKGEMXFF1taOpeFCW_9KpkBxoivnuNXeSw_Ug6ahEU8Gvt2h4XPf_EdR9ni2qTw37acT0zHQU4Z1tfwRndxaNK_6tyVbIIrsp2vIzL1gjKngakzXr6_6dLRLP3FZaCprnrBzyR18KZY_8d1svP_IQHnbiRk8AGfiHIY_2jJwzVJrRAKcPp_Ej2qtkQfTAUyw1csacSp_vWh7UL_25oeERnf9zIhILKNFe76Qrl3ZNhzTFKch12brXSbO-bH3laMqJzWOgUR8AmLw0telmirn6Vnd_CcGcdkdqfABNEx8KFWM0Dbhz3o4gP4R9O65MXHZSYPRHiT6zcnPW_pP8bVPT8LHhiX9PeMx3eDLLQtorDRMQbSiOdrbfgSS0dIAIMn80KSj_bBY_IMsBKjEC55Vbt9gY8WZW5yxVeolIzskmlWzeqLR6rDszc8SjzsdRHxap2Ro7dW2Dq3YznXcBB7T67KmXGNDA1zkVbUNEPGcdqcygTjh7tx2ZD79l4TBDFHq0YXBBoMa8iMuvfFd0H&p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm75LbK-B2sK3D78qpO6rg_ieD33-fjwZEQOJRPN02dEYMt0VnFfXbdBsPDRb2dMCNAjEGpeNUQCj_Ag3-P1FPPli4OOuKdnlNUTMKFiLIE-bxyPVnRMM5uCwBFui0XyKM3Q1LXteDhP0vvyJbsNtBNkB_2LzAm-93ulhe9v9k3VuGtJHZPLUuDkiMqxzoS6tvPBSrpAMbVIyiKaC18mbI4T3sC6VPoCuNl6YJnIxCww9DzPqqscUER488QTUi0QCtbfoSoy_O5Z5uwOglYOjJmv5OGf-GJ4AnDuSput4fpGI78ym96SI8iYWHit87cl9uTmxE2Ls8OE2wuDUeUISOvsPNhaXJcGuxGiQuzssHnkqPTKQ1_VpYfUK5T5jqdQ-1x548N48i-m02MRIY_k1vptc434BxpZPz5ApiCiF71G_AJUQh80RbEYbxXEQRbhQvPTA2CQKOuTg74HUrjlfuD-FRWPRf7AJd62sv9qS7LoLSf3DAv_8gDxpE3ns8fiNIS4Go7uau19eax9dDFIpGYD9H6MolZ80680plPrLKPPv8-Vt_A217auNeCRpEB3jnc7f8LnDjOSlVR8W6rgojhFy6YkmVw0biD3dmwwIR7yLv2j49R03gOezIBT1pl38r-vmYjZ46Z7PrR4JI2nTkpFXShyCjBUbb-eqvcarCr-4fZMdfrf5KyiwlDi0Gaer-LDG3DKbHU&p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm75LbK-B2sK3D78qpO6rg_ieD33-fjwZEQOJRPN02dEYMt0VnFfXbdBsPDRb2dMCNAjEGpeNUQCj_Ag3-P1FPPli4OOuKdnlNUTMKFiLIE-bxyPVnRMM5uCwBFui0XyKM3Q1LXteDhP0vvyJbsNtB1OCT3_mwccYRZF8sMaRTCM46c5UaG6jNJ4ePZtzF3beqkoAK3Mp3-CGGhMsKZK-CYMLx_HVfobJ6pGbX4E3JJraQoNgPVbtWrhUdxiJrUPI6TOZ9RafOKyE1r3WqBhjhu-7SOweoRTcqY_JYnTrRJLNXhjyfpd0ivcs80O8GWyfMwNoevEInKCdJdJ3F_6PhzjVx9RgPoSBrL4rmr8V-b0hTwQFM5i3IG1n0TIuGQG7YZemst9-Kxei1YIX_bd3KJEBltat5h9tE-wPSEOyAiHfwcQYLRYncOktoEOqpoHx1RIf3fi-6wcWDhMotNp4byNGdoLWGpKlnaGdhrwKDYGhvOzloFvIUhS3dWcTf36GMSIyaPZq0-XpWTAdhRk7YM0GPYFdrlpdSjMq9rHDIGEKEzZdFFo_YOe5UFZjfTLONBwxPvDECmqph9BNR8JgLL4E5Q20RzD7TRYJwpvc-Gv5T6jSG-0ZAWnyI09HYvFOcfW20HNX2-Fwi-4hyEmFq64rjBGJNqWxf-Xe112imdue5zQGBYLA4z_MZ602LkrjjfjS5Tg9La&p=9NwGV8Ov71o%3DgW5NEpb6rjab0hHSxXenkWHSkCwB26b0x_gtnWSAWxe4W5DsfKJWZD9kpHtw2YnQUly0WiKocYE-BIwEn7U0Y1HXZwZneUzOnAAK6f1f5yIn_xyJnK079W2v8jvNtR2LUsDWyf2Bb3u2Of7Qvq4zUQgWjfDq2Lw9UpMHMsCF03WODyPFYhCAJcm";
let smallzq = $.getdata('youth_cut');
let indexLast = $.getdata('zqbody_index');
let artsnum = 0, videosnum = 0;
let videoscore = 0,readscore = 0;
let artArr = [], delbody = 0;
if (isGetbody = typeof $request !==`undefined`) {
   Getbody();
   $.done()
} 
let lastIndex = $.getdata('zqbody_index')
if (!$.isNode() && !YouthBody == true) {
    $.log("您未获取阅读请求，请求阅读后获取")
    $.msg($.name, "您未获取阅读请求，请求阅读后获取", "", {
        'open-url': "https://kandian.youth.cn/u/UnEWm"
    })
    $.done()
} else if (!$.isNode() && YouthBody.indexOf("&") == -1) {
    ReadArr.push(YouthBody)
} else {
    if ($.isNode()) {
        if (process.env.YOUTH_READ && process.env.YOUTH_READ.indexOf('&') > -1) {
            YouthBodys = process.env.YOUTH_READ.split('&');
            console.log(`您选择的是用"&"隔开\n`)
        } else if (process.env.YOUTH_READ && process.env.YOUTH_READ.indexOf('\n') > -1) {
            YouthBodys = process.env.YOUTH_READ.split('\n');
            console.log(`您选择的是用换行隔开\n`)
        } else {
            YouthBodys = [process.env.YOUTH_READ]
        }
    } else if (!$.isNode() && YouthBody.indexOf("&") > -1) {
        YouthBodys = YouthBody.split("&")
    };
    Object.keys(YouthBodys).forEach((item) => {
        if (YouthBodys[item]) {
            ReadArr.push(YouthBodys[item])
        }
    })
}
timeZone = new Date().getTimezoneOffset() / 60;
timestamp = Date.now() + (8 + timeZone) * 60 * 60 * 1000;
bjTime = new Date(timestamp).toLocaleString('zh', {
    hour12: false,
    timeZoneName: 'long'
});
console.log(`\n === 脚本执行 ${bjTime} ===\n`);
$.log("******** 您共获取" + ReadArr.length + "次阅读请求，任务开始 *******")

!(async() => {
    if (!ReadArr[0]) {
        console.log($.name, '【提示】请把抓包的请求体填入Github 的 Secrets 中，请以&隔开')
        return;
    }
if (!$.isNode()) {
  $.begin = indexLast ? parseInt(indexLast) : 1;
  if ($.begin + 1 < ReadArr.length) {
    $.log("\n上次运行到第" + $.begin + "次终止，本次从" + (parseInt($.begin) + 1) + "次开始");
  } else {
    $.log("由于上次缩减剩余请求数已小于总请求数，本次从头开始");
    indexLast = 0,
    $.begin = 0
  }
} else {
  indexLast = 0,
  $.begin = 0
}
    if (smallzq == "true") {
        $.log("     请注意缩减请求开关已打开‼️\n     如不需要    请强制停止\n     关闭Boxjs缩减请求开关")
    };
    $.index = 0, readtimes="";
    for (var i = indexLast ? indexLast : 0; i < ReadArr.length; i++) {
        if (ReadArr[i]) {
            articlebody = ReadArr[i];
            $.index = $.index + 1;
            $.log(`-------------------------\n开始中青看点第${$.index}次阅读\n`);
            await bodyInfo();
        }
    };
    $.log("\n……………………………………………………………………\n\n本次共删除" + delbody + "个请求，剩余" + (ReadArr.length - delbody) + "个请求");
    $.log("本次共阅读" + artsnum + "次资讯，共获得" + readscore + "青豆\n观看" + videosnum + "次视频，获得" + videoscore + "青豆(不含0青豆次数)\n");
    console.log(`-------------------------\n\n中青看点共完成${$.index}次阅读，共计获得${readscore+videoscore}个青豆，阅读请求全部结束`);
    $.msg($.name, `本次运行共完成${$.index}次阅读，共计获得${readscore+videoscore}个青豆`,"删除"+delbody+"个请求"+(readtimes?"，阅读时长"+parseInt(readtimes)+"分钟":""))
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())

function bodyInfo() {
    return new Promise((resolve, reject) => {
        $.get(batHost('article/info/get.json?' + articlebody), async(error, resp, data) => {
            let bodyobj = JSON.parse(data);
            //$.log(JSON.stringify(bodyobj,null,2))
                $.begin = $.begin + 1;
                let res = $.begin % ReadArr.length;
                $.setdata(res + "", 'zqbody_index');
            try {
                if (bodyobj.error_code == "200007"&&!$.isNode()) {
                await removebody();
                delbody += 1;
                $.log(bodyobj.message+"已自动删除");
                } else if (bodyobj.error_code == 0) {
                    acticid = bodyobj.url.match(/\d+/)[0];
                    artdesc = bodyobj.description
                    author = bodyobj.account.name
                    ctype = bodyobj.ctype == 0 ? "阅读资讯" : "观看视频";
                    if (artArr.indexOf(acticid) == -1) {
                artArr.unshift(acticid);
                        $.log(ctype + ": " + artdesc + "  ----- " + author + "\n")
                        await $.wait(10000);
                        await AutoRead();
                    } else if (artArr.indexOf(acticid) > -1&&!$.isNode()) {
                        await removebody();
                        $.log("文章ID:" + acticid + " 请求重复，已自动删除")
                        delbody += 1;
                        await $.wait(1000)
                    }
                }
            } catch (e) {
                $.log('获取文章请求失败' + e)
            } finally {
                resolve()
            }
        })
    })
}


function AutoRead() {
    return new Promise((resolve, reject) => {
        $.post(batHost('article/complete.json', articlebody), async(error, response, data) => {
            let readres = JSON.parse(data);
            //$.log(JSON.stringify(readres,null,2))
            if (readres.items.complete == 1) {
                $.log(readres.items.max_notice)
            } else {
                if (readres.error_code == '0' && data.indexOf("read_score") > -1 && readres.items.read_score > 0) {
                    console.log(`本次阅读获得${readres.items.read_score}个青豆，请等待30s后执行下一次阅读\n`);
                    if (data.indexOf("ctype") > -1) {
                        if (readres.items.ctype == 0) {
                            artsnum += 1
                            readscore += parseInt(readres.items.read_score);
                        } else if (readres.items.ctype == 3) {
                            videosnum += 1
                            videoscore += parseInt(readres.items.read_score);
                        }
                    }
                    if ($.index % 2 == 0) {
                        if ($.isNode() && process.env.YOUTH_ATIME) {
                            timebodyVal = process.env.YOUTH_ATIME;
                        } else {
                            timebodyVal = $.getdata('autotime_zq');
                        }
                        await readTime()
                    };
                    if ($.index == ReadArr.length) {
                        $.log($.index + "次任务已全部完成，即将结束")
                    } else {
                        await $.wait(20000);
                    }
                } else if (readres.error_code == '0' && data.indexOf('"score":0') > -1 && readres.items.score == 0) {
                    $.log(`\n本次阅读获得0个青豆，等待10s即将开始下次阅读\n`);
                    if (smallzq == "true") {
                        await removebody();
                        $.log("已删除第" + ($.begin) + "个请求，如无需删除请及时提前关掉boxjs内的开关，使用后即关闭")
                        delbody += 1
                    }
                } else if (readres.success == false) {
                    console.log(`第${$.index}次阅读请求有误，请删除此请求`);
                    if (smallzq == "true") {
                        await removebody();
                        $.log("已删除第" + ($.begin) + "个请求，如无需删除请及时提前关掉boxjs内的开关，使用后即关闭");
                        delbody += 1
                    }
                }
            }
            resolve()
        })
    })
}

function removebody() {
  if (articlebody !== ReadArr[0]) {
      smallbody = $.getdata('youth_autoread').replace("&" + articlebody, "");
  } else {
      smallbody = $.getdata('youth_autoread').replace(articlebody + "&", "")
  }
  $.setdata(smallbody, 'youth_autoread')
}

function batHost(api, body) {
    return {
        url: 'https://ios.baertt.com/v5/' + api,
        headers: {
            'User-Agent': 'KDApp/2.0.2 (iPhone; iOS 14.5; Scale/3.00)',
            'Host': 'ios.baertt.com',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body
    }
}

function readTime() {
    return new Promise((resolve, reject) => {
        $.post(batHost('user/stay.json', timebodyVal), (error, resp, data) => {
            let timeres = JSON.parse(data)
            if (timeres.error_code == 0) {
                readtimes = timeres.time / 60
                $.log(`阅读时长共计` + Math.floor(readtimes) + `分钟`)
            }
            resolve()
        })
    })
}

function Getbody() {
    if ($request && $request.method != `OPTIONS` && $request.url.match(/\/article\/info\/get/)) {
        bodyVal = $request.url.split("?")[1];
        if (YouthBody) {
            if (YouthBody.indexOf(bodyVal) > -1) {
                $.log("此阅读请求已存在，本次跳过")
            } else if (YouthBody.indexOf(bodyVal) == -1) {
                YouthBodys = YouthBody + "&" + bodyVal;
                $.setdata(YouthBodys, 'youth_autoread');
                $.log(`${$.name}获取阅读: 成功, YouthBodys: ${bodyVal}`);
                bodys = YouthBodys.split("&")
                $.msg($.name, "获取第" + bodys.length + "个阅读请求: 成功🎉", ``)
            }
        } else {
            $.setdata(bodyVal, 'youth_autoread');
            $.log(`${$.name}获取阅读: 成功, YouthBodys: ${bodyVal}`);
            $.msg($.name, `获取第一个阅读请求: 成功🎉`, ``)
        }
    } else if ($request && $request.method != `OPTIONS` && $request.url.match(/\/v5\/user\/stay/)) {
        const timebodyVal = $request.body;
        if (timebodyVal) $.setdata(timebodyVal, 'autotime_zq');
        $.log(`${$.name}获取阅读时长: 成功, timebodyVal: ${timebodyVal}`);
        $.msg($.name, `获取阅读时长: 成功🎉`, ``)
    }
}


function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}