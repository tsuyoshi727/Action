/*
 𝙔𝙤𝙪𝙩𝙝_𝙨𝙥𝙚𝙚𝙙 𝙛𝙤𝙧 𝙥𝙚𝙧𝙨𝙤𝙣𝙖𝙡 (𝙖𝙣𝙩𝙞-𝙛𝙤𝙧𝙠)
 𝙊𝙥𝙩𝙞𝙢𝙞𝙯𝙚𝙙 𝙗𝙮 𝙗𝙞𝙜𝙘𝙝𝙖𝙡𝙞𝙯𝙞
 𝙋𝙡𝙚𝙖𝙨𝙚 𝙧𝙚𝙥𝙡𝙖𝙘𝙚 𝙢𝙮 𝙘𝙤𝙤𝙠𝙞𝙚s 𝙬𝙞𝙩𝙝 𝙮𝙤𝙪𝙧𝙨,𝙩𝙝𝙭.
 */

const $ = new Env("中青看点阅读")
//const notify = $.isNode() ? require('./sendNotify') : '';
let ReadArr = [], timebodyVal ="p=9NwGV8Ov71o%3DGvDnjwMsu_ld4qx0YVkhCGSN79Nz9uYVRT2FlKyzzeRQkfNpi91m1uMr6_-349OB-6aJlP8QT1ZdQPfuBKAN73038JxG2PDvPLwzRpKLSOsodHj_5p2KvGLJLTxe6lfbK5_TBTkHhXvca5GLmeMMIM2me3E4Xk0LlYXICZPYUVS41NtlD5E7UqeFd44THGsHPrkQVVy2wKimejlEAduBOll5J-tZj-otxKuKvRFJ78FtqOabXaEBWYQ1a_jrHl0LR0XbRjlq8jYZHOg2smMVv0M0juLOxTAn17-p9hvYqT19nPQx4bmAOwsELLG1f9xluh_zXb5r-CCtYb4vjR1Ffr-rkgHuCY-P6SKDKkOg8-zVbU5hNNGctLT3y_f5RfIoXDdFAI_B8mQyCHV-I7IZLv6zi-3jj6ByZfueT7mFbvOdRjjSJZJPfHtPKvKojrkZCf34Bdl2Ep5ZltVQ8ge83ddylzsouPb62SmUG1TYi0S021JxlSzDYUEfS4Ll0t52YErwaOeqXEgCRTjQOWhggPWYi5OjHuKsPQ62FgfRrCejUeDDdJ4x9G8e9MOf5_SQ4yi5FyAYtx5bnnNjQPVQW7SSzODbGBFXtktCAKpDkbtrbVxh51H9Mr550xnrz11dDadYUg5Wx6PqrqZ5AJ1UiahbmUcpWT7UrycDtT_J9OGjg8FKTRJtzZoqNAAg9_Pls3tr2wMEt5nHhN0KULK907WcHxvbtca225Xvfto1Di3vz97_wF2sIJqB-BEWUYf5c4P_rY6OBdT5NUytT2DLS4ohoFlTo5L5v3WwdEGwnWGXY-3QbRsp25ArMAGktJD5";
let YouthBody = "p=9NwGV8Ov71o%3DGvDnjwMsu_lk8V15hrmPeFtKCBAoDX5kGur-cnFinG3YJaQn1aQuAR9smIYB83vu02Gg-EMF1dx2nZR8f2ZuK80kquxvkhMaEUgSy6RBZAnUL1hDH1sF75gkBYuAUjtFtdYxpnqABdiFyVRBtyMKNL5ySEW0dy54-r_5NfI2eiJaf8mwUP6txLh_tj-2WkKWhCF_1uPDIML_Us0d2a1Q7DFCOeHiGwhoqFTkSuca5azYI3po9TelowpO-9y-8n4Xn-0VlH0cg17Xb3Q3myHmjQXRN5DLCG-1LYJ1ohX4SWvkqy9IQzzYS-diJTWVnA9DEqrvbvipgkZJdMzwYdlrTk7EGDfJ-8Va5Gi7O6RFGeBj-197AeLNIDkYgwzBN2FeoqEmB7oGKmqdDuB0VAKHv5dPX6hvLsVvOmxKFf7dg-MGgcPqWer4FElYgR9vgQCG9YQxtd-oaRMGNPqeGCEG-UPN3MSRg2iTVbzZjqaRBBEdZ1UswO40JPHqyO8It9NM_fFe1xKX0hx-9CqQ9zMuVtMQr6m_X0SoOlSAGRxi-LXrgTEzTOqGpPu5t9BpIRhw6ZzCJOfsy8Sf8SL77L8-DBdKUDugfhA53_cC4JUN7ZKSTH0RQ3h5edmiSAtObWegU0LXIb11Cv4XxhE3z6iLeYQ9FZq_fR5GR9tghlQR7-YK8JHieUljtCZuAXTRk_csv1jpsh-49TPYjGLjV51e6YSUQkriFExBx7LWPVz8rqsYBjGa65LKJXj2SZOVTJBWHV8eiELUqaVbbBtGOhlm_4rPDeDLXpZ79HACvVLCNTkn2oND4xWFZTQJcYbbVZl-I8MeuDysRRG9NH0C3OK2UMvi2xT6eEMwm38xAutLeyHUdMbx6V2jMXtYydRqSWgL&p=9NwGV8Ov71o%3DGvDnjwMsu_lk8V15hrmPeFtKCBAoDX5kGur-cnFinG3YJaQn1aQuAR9smIYB83vu02Gg-EMF1dx2nZR8f2ZuK80kquxvkhMaEUgSy6RBZAnUL1hDH1sF75gkBYuAUjtFtdYxpnqABdiFyVRBtyMKNL5ySEW0dy54-r_5NfI2eiJaf8mwUP6txLh_tj-2WkKWhCF_1uPDIML_Us0d2a1Q7DFCOeHiGwhoqFTkSuca5azYI3po9TelowpO-9y-8n4Xn-0VlH0cg17Xb3Q3myHmjQXRN5DLCG-1LYJ1ohX4SWvkqy9IQzzYS-diJTWVnA9DEqrvbvipgkbc4DPcj8BW7nA_APYGGW7gE50GGQslwURwlbGLWHFYNbKDAojOzBi3xeBroiO3l1NzOmXrreUseCOtJ5lWMsgUv4Rq8-kgE69qEPeOO2SVgNDl-QpXgMvsHVna7yRpru-DKJnr0Nk3oxwUBg7bOE4BJxpQaQAh8fw8b0_zcWXS6PW7_-1YUNotoNqTV89rsU5DUnJ7vowauuJgG4734EmHQXK8l8vV5KmCfA4Z-rHtOzBE3OmdcVAnWrj9vxs41O1HVEPVYb-gTBnUzDXKikf8Khlw-b3Ln57eR1jc0u6bJiOakK2KU5JyOKmpy7he-i9BN6RiwySxE9cYX9rcm9ufKA2e_MTD0C8zfIkPhOhI_BkLO-xnAAi9MJudo95kmAybZ_yPgipaQhPwl-D6husX4AwBmQOEws0At8XZg3lhSyff7-r6ETLeA7rGpudQjAAc7b92o92vS-2oYbZVtxKEi5MrUcJK8XbXpsE_uCfP2oXBOd72_-kq1EC54U67dF_YPiefw2FyIgdjb_UbaQyMZ4x2XIYTITWhtRlogtt_N-UKD794Rfmg&p=9NwGV8Ov71o%3DGvDnjwMsu_lk8V15hrmPeFtKCBAoDX5kGur-cnFinG3YJaQn1aQuAR9smIYB83vu02Gg-EMF1dx2nZR8f2ZuK80kquxvkhMaEUgSy6RBZAnUL1hDH1sF75gkBYuAUjtFtdYxpnqABdiFyVRBtyMKNL5ySEW0dy54-r_5NfI2eiJaf8mwUP6txLh_tj-2WkKWhCF_1uPDIML_Us0d2a1Q7DFCOeHiGwhoqFTkSuca5azYI3po9TelowpO-9y-8n4Xn-0VlH0cg17Xb3Q3myHmjQXRN5DLCG-1LYJ1ohX4SWvkqy9IQzzYS-diJTWVnA9DEqrvbvipgkZARfLexsV5SsqmCL5CMZHF_T2qtZFSUJ5OI0PrJSXJfU2Gob9CW8jHe0U8VSGXEcDwMSwa3v9tGcaLXsyhim2LBSC4GIv90hgh37j_I3o26MWGnzfpSzpdGJG3Nd5NZfGl_qZfcs2lHbWrFGZOG1G0VYrIJ2A5mEWm0QPEuRELhtxMfD2Q060pjk-ICZ01uLuhxQDi_0MMs34THwGRDZSC0pkDwvG7KGnIONMWuO3xKxDY5RS_mvnvDvNl1DqPvwW-hgVjxb-hrL7MPGMsntkqwn6VWmAWz7_nPIP6AXLsf03CKTGkDTmEbV5Bv73nqNzdkY79qcCvHyQ50hPWkDyBR4wqL0q2_U7GHhVa_sSsS6bzd7rnRdlm97jp_E5_k0eNafWHT8mGBBLYHuCgnj_Qm4i5qNCxlZEwNTFyK0F4Phuk9UJhiPnth-adDRKeXaF_7fAAI__7elBYm27lqwU_DWBrhKcrZUEsXvTNQbDXuQfkgoRBY_k1tNdY7Ju0inbDeYWiqdMbc5L67A8pK9cNz06Q4Si_jOaUDvNjtArPEFAXeyjzkrDT&p=9NwGV8Ov71o%3DGvDnjwMsu_lk8V15hrmPeFtKCBAoDX5kGur-cnFinG3YJaQn1aQuAR9smIYB83vu02Gg-EMF1dx2nZR8f2ZuK80kquxvkhMaEUgSy6RBZAnUL1hDH1sF75gkBYuAUjtFtdYxpnqABdiFyVRBtyMKNL5ySEW0dy54-r_5NfI2eiJaf8mwUP6txLh_tj-2WkKWhCF_1uPDIML_Us0d2a1Q7DFCOeHiGwhoqFTkSuca5azYI3po9TelowpO-9y-8n4Xn-0VlH0cg17Xb3Q3myHmjQXRN5DLCG-1LYJ1ohX4SWvkqy9IQzzYS-diJTWVnA9DEqrvbvipgkb-gvYz8QDQkl5zwoZF7WY1l2-49fENy1JLNZGhsHSIP7bXTvcpjZC_PyUP7DZCkvi3bdrn4o46rsEW6ZPH6zDMgPqut12LBt64T4DALhz1hGtaWF8LNq7gYr0GtIICBRiRm8z_2fLZ9702qZXfqf7LL5Tet1Q6sAaBDI226K7T1I3DZ-8uWefOqpLI2HSKM6X1oHwmdN49kJzQ_sOSaeKqkWQzGIpxVQEZLuavoxj2YbuQjEvejylDVsehZWi3OkWqGU1pfMjjyz1WLpSg6adPNCusdkQ0IO3I-wgP4W0-e9gV1l2sDHSB0X-JOmVsWuStYk0HRT7V6tWlNtGjoEXw_ZuKJn43X5mo4wu48_a5B4W44eR0Vz3q0pkNHDls6AUAtgCcmIn5g7zLF6G8ZGn9r4oPp7iU5rXL5485r2Og57vh-YNVz2E65DE9Zb3DJRB_NGLOg0-Z6GtXY-8W4cRQX5gPU2NT_LXs1li6zFS3e5_ylvU4wLpTPDVEqpwumKPIy-zYEi5prjOQbQjnAtvJRVNiM0I-O04Cpxa9xOXnTslH0zQ1eXNP&p=9NwGV8Ov71o%3DGvDnjwMsu_lk8V15hrmPeFtKCBAoDX5kGur-cnFinG3YJaQn1aQuAR9smIYB83vu02Gg-EMF1dx2nZR8f2ZuK80kquxvkhMaEUgSy6RBZAnUL1hDH1sF75gkBYuAUjtFtdYxpnqABdiFyVRBtyMKNL5ySEW0dy54-r_5NfI2eiJaf8mwUP6txLh_tj-2WkKWhCF_1uPDIML_Us0d2a1Q7DFCOeHiGwhoqFTkSuca5azYI3po9TelowpO-9y-8n4Xn-0VlH0cg17Xb3Q3myHmjQXRN5DLCG-1LYJ1ohX4SWvkqy9IQzzYS-diJTWVnA9DEqrvbvipgka4uxzET2FcuFpx3jmz9dNYn4a4xXGz3f14dDwEIatmi7kShhI1zzsg7AHhfrsMwjaXpHoi1yhe3YIvRNZuhJWbdSP9yGJqhOVHg3CWdgT1YF0-hVJU1OttTTKtEZiLg_DffwiLP-3y5socpuOeaSMqHJIjXIrtWvL2yG5AcDYThVVsT2wjkmjRjcraybhgZkEK3ORoyGpb1sLjJdI5HLGLdxuW6FFsM4PVqgS-tg543hxSOxxHuWUT06Rkb3xGVaBFt6NZrbVsVXdd4zGrmcd4DJn5LoDic_I3qJfh9kB3hv_14d0a9IsooEXLhT9HmVfyyq8qVoo_4gdOTvWmHH0SkwXnET9ImyR6pVxKBGwfX7TcUt88s1rGWl_2USTYcM1nBI0KOjh128ixQ5BLimO6l86KEiIZod51U2X0KhKmsngJHm3N3Zf-4Bjk8ga7GKciPJiYP3DnNaPN2HBtsZT5eXKYDaNSDVzA5ypJVyFtTNcPMDVdW7iM3o-JaWRajpxZ1BFlZJa-hJHON8usMkkqEnBH3oKb3mc8khGi5CDqd5TewcZSIR6Z&p=9NwGV8Ov71o%3DGvDnjwMsu_lk8V15hrmPeFtKCBAoDX5kGur-cnFinG3YJaQn1aQuAR9smIYB83vu02Gg-EMF1dx2nZR8f2ZuK80kquxvkhMaEUgSy6RBZAnUL1hDH1sF75gkBYuAUjtFtdYxpnqABdiFyVRBtyMKNL5ySEW0dy54-r_5NfI2eiJaf8mwUP6txLh_tj-2WkKWhCF_1uPDIML_Us0d2a1Q7DFCOeHiGwhoqFTkSuca5azYI3po9TelowpO-9y-8n4Xn-0VlH0cg17Xb3Q3myHmjQXRN5DLCG-1LYJ1ohX4SWvkqy9IQzzYS-diJTWVnA9DEqrvbvipgkbVFLMl1TofgAqkJgQ0c6p-Lj0AysXgb5KVmOgakndLTzaSo-MPYzkedVGOcMXenlFn9BGTQfETteBeRpSZo2p7jCUTqfpruS_TFNHbAT6C4wvxHZSN3t99ekoRlygK4z_L7rofoMYyRofqvcQVxpMO6tfM8A45XZeczAc3L7kM_pKG5nkdOvlz8xjiebkGUd4R3C8dF_3FzPWCljiaChPdbTqKKqoolfuScsqHcxUuD7FmWYDC2rxfJK1PrvgiMeTNYfEsqhDwj3aJ5C19EbeRIQ7ZWvTPojLg3rLub4rjBZUSO_qnrpDXqjxgY8FXQZEB183mxYHOQl_cYHbTOtK3drv2mi3LOcOnhZ71beqUTtIs0D40BMBTtda09jsc_K__XsQcSpuViYwtNok12mIcAjLB1ViEeMBPxORIYzXG-5Ow2NolRDsUJgC0y_JC4ZUY-07eyVdQjy9nPA-mC_4d_2B-6ACWq1gESuwEC94BL-AuFt-E2HH8A4-UFWGSWC0MaZeoVegG1JWwJJ0OaxwLNVn-yisqbp7dw9t_7YVYVreEqeya2Y8D&p=9NwGV8Ov71o%3DGvDnjwMsu_lk8V15hrmPeFtKCBAoDX5kGur-cnFinG3YJaQn1aQuAR9smIYB83vu02Gg-EMF1dx2nZR8f2ZuK80kquxvkhMaEUgSy6RBZAnUL1hDH1sF75gkBYuAUjtFtdYxpnqABdiFyVRBtyMKNL5ySEW0dy54-r_5NfI2eiJaf8mwUP6txLh_tj-2WkKWhCF_1uPDIML_Us0d2a1Q7DFCOeHiGwhoqFTkSuca5azYI3po9TelowpO-9y-8n4Xn-0VlH0cg17Xb3Q3myHmjQXRN5DLCG-1LYJ1ohX4SWvkqy9IQzzYS-diJTWVnA9DEqrvbvipgkYqlHXTasAp-kVHz-fNHcxHiOGfawy36JhXRtvaCYFRe34V8WlU6mtdH3k222C3OPaTGihbJrybZkqcAts9wp6SpwE0fjk1Cd97HEUynxs2JGk--s4m3qnU6SkXm1GkHNuRsIcRmoVnyL61a3UhpuGL-L3ORhDJVrOraQcatsi_u5dIkR7neYFk4aKXbvM2LMRhMVs4KRRZJD2Nz__jJXTGURiX2KjxO1I2ixbSSRIOv6yDRvBg7Ec9bMIev2gxgQ063t2fe3-jWXn9OkfzDncpKlnceZgSXoJDOLUOWIpmbQA5BURAeISqz8__lQcM2mXCwLdFdTA8c6jSYfGtGlffDXAbv_fKq3lwDI6iiH7Cc59TV1J9PM5eWzUZ_MPLtvQD6TcWNVIf-KQHkCKRJNc910-W6zngbGZMwfxmtwYL9gayPD7IQIPuO6wOpy4TTlj5YsclcUrYojxmZZ_mM8h4b8GkeY4vZVRrnjUrxsAO8hgzdmOblcXl5SU9X08BGSkjDDS08X1zKQyEIIUqXyD09Rc_wfNwdOmaw0Riumnodmw_--U4lgCQ&p=9NwGV8Ov71o%3DGvDnjwMsu_lk8V15hrmPeFtKCBAoDX5kGur-cnFinG3YJaQn1aQuAR9smIYB83vu02Gg-EMF1dx2nZR8f2ZuK80kquxvkhMaEUgSy6RBZAnUL1hDH1sF75gkBYuAUjtFtdYxpnqABdiFyVRBtyMKNL5ySEW0dy54-r_5NfI2eiJaf8mwUP6txLh_tj-2WkKWhCF_1uPDIML_Us0d2a1Q7DFCOeHiGwhoqFTkSuca5azYI3po9TelowpO-9y-8n4Xn-0VlH0cg17Xb3Q3myHmjQXRN5DLCG-1LYJ1ohX4SWvkqy9IQzzYS-diJTWVnA9DEqrvbvipgkaNTgBUlVn27yjzV17_eExxwjKAvUTd7XKDG7KNNGmHKxihowzHGrgCg8uu7xVq3HxBzGbbOAVXEfRUl1xLThqnXKuq1lciUSsCDJcSPkP0Ra-skMTFsqTZq8TnCgaS5EaxAnz5rciCzeR6DF90fIeV8tv-1XHJbbWLFmsFMx-Y1DPAax39dFrlpqRiiRWeeIJrtqo3WMPWwVeuBUi66tcxy7TZ9EigkmDl-1hXXhDVHZg_QavB7jXSfq_DXANeTiu-G8v0BxLXJH3zo3TUEMpDX1_LEz1jx5769BHKOtQqoIWTTl7GYGp9X4PLVanM2VjtIltxqe3opwdurKCjqabA3yXMNdOWDJvhmpyzuAzRePmjbIss-QwY1ZL33bblUzr0NtiudVo1lm-TbcMYUNAVN_Qbv2gQoZ00-x49UT6OuEoPfv2i3SySqU-2agtkUyu4XkZuKsgkR7x7Z62QDAwIrY3Hq9ZQUUtpogZVC1hm3KBSIj-2j0BXrZjHbmNXg1ZH-EwGa_pO2n1_5cDRpCIqG6SrOH0kRI4Sbp2VMbKlblhEkNG4m04O&p=9NwGV8Ov71o%3DGvDnjwMsu_lk8V15hrmPeFtKCBAoDX5kGur-cnFinG3YJaQn1aQuAR9smIYB83vu02Gg-EMF1dx2nZR8f2ZuK80kquxvkhMaEUgSy6RBZAnUL1hDH1sF75gkBYuAUjtFtdYxpnqABdiFyVRBtyMKNL5ySEW0dy54-r_5NfI2eiJaf8mwUP6txLh_tj-2WkKWhCF_1uPDIML_Us0d2a1Q7DFCOeHiGwhoqFTkSuca5azYI3po9TelowpO-9y-8n4Xn-0VlH0cg17Xb3Q3myHmjQXRN5DLCG-1LYJ1ohX4SWvkqy9IQzzYS-diJTWVnA9DEqrvbvipgkYxYpVHI_CbryXFYuOTQle-maSz7qmgwKaP6-ut8PIUwODnCzwipQKX9IHTqnKae4JCayto-r_rTndcCob9GGXpWT4OZryEWkxu4e5hD1t4Ko8GkHDGyutCSBwqmY1IBtmLwCaB1r4d_yneEGVwgey4BLZKWoc6YTqF-wI_0b6EKMd2rJ21DeGJrUYS0gg97lojwwbdPSCWnOnWZiJHWGaNaPssd8wj0EsLBiGHpD49qvtd2b3x_wuCbvb0Mp-A6WaUr0WsDvbpjYqEY8GsCTA3j_fYM82BZ9Gy48FPelBg7rpXYuSIpdGJC0wD5fv1fex5gpB5o88L-CnP7mJ-6dlZc_xZlCZLXDoKT_AVzEabsUhi_zyP6hRSi3z7xCGWK8aeNizbb4hVdHvLwQDERg7xtI_sXu3ePYTppl9P9U5W9o5Dw7siGnMI6fW37sYjHjKVaj2cg72RnhIi23-aR8OaFLp9NEQq4inODuRVyZFDKqQ2cLoOhienMdKrQ0YDNO0-2UgkddH2DzeLMN5kFwOmim1dINgX3unnM9L5QMKJckziL4WDLXXj&p=9NwGV8Ov71o%3DGvDnjwMsu_lk8V15hrmPeFtKCBAoDX5kGur-cnFinG3YJaQn1aQuAR9smIYB83vu02Gg-EMF1dx2nZR8f2ZuK80kquxvkhMaEUgSy6RBZAnUL1hDH1sF75gkBYuAUjtFtdYxpnqABdiFyVRBtyMKNL5ySEW0dy54-r_5NfI2eiJaf8mwUP6txLh_tj-2WkKWhCF_1uPDIML_Us0d2a1Q7DFCOeHiGwhoqFTkSuca5azYI3po9TelowpO-9y-8n4Xn-0VlH0cg17Xb3Q3myHmjQXRN5DLCG-1LYJ1ohX4SWvkqy9IQzzYS-diJTWVnA9DEqrvbvipgkYxYpVHI_CbryXFYuOTQle-maSz7qmgwKaP6-ut8PIUwODnCzwipQKX9IHTqnKae4JCayto-r_rTndcCob9GGXpWT4OZryEWkxu4e5hD1t4Ko8GkHDGyutCSBwqmY1IBtmLwCaB1r4d_yneEGVwgey4BLZKWoc6YTqF-wI_0b6EKMd2rJ21DeGJrUYS0gg97lojwwbdPSCWnOnWZiJHWGaNaPssd8wj0EsLBiGHpD49qvtd2b3x_wuCbvb0Mp-A6WY1bNYc9lE3vLeu0kU71wQYeuO0GymeVcje_Fx67hb0ged59HD7XiPhSxixq91A0bGplWMkkHwv9h5qj9yv8j-_jtrPvUThA95806_eZjCfsjoT09Kx8NPtH_ScDhp0OwTLDbqbsRQLsr7XXZLkavDu9Fs1O69GFt3PWda_sMcg5zYUqp0OzhUTdYmRZgqnQTHR-zizjbaV7V6zRrWCrdXIeip4fPMspCNXd-ttWfV57qsqOpnRFxihRb-Ba5qfi2lkgg4tkMSMQ4fzTPmyiMjUCmRIiAjWQx0HsdqiNlFbsQ8234UcWZqJ&p=9NwGV8Ov71o%3DGvDnjwMsu_lk8V15hrmPeFtKCBAoDX5kGur-cnFinG3YJaQn1aQuAR9smIYB83vu02Gg-EMF1dx2nZR8f2ZuK80kquxvkhMaEUgSy6RBZAnUL1hDH1sF75gkBYuAUjtFtdYxpnqABdiFyVRBtyMKNL5ySEW0dy54-r_5NfI2eiJaf8mwUP6txLh_tj-2WkKWhCF_1uPDIML_Us0d2a1Q7DFCOeHiGwhoqFTkSuca5azYI3po9TelowpO-9y-8n4Xn-0VlH0cg17Xb3Q3myHmjQXRN5DLCG-1LYJ1ohX4SWvkqy9IQzzYS-diJTWVnA9DEqrvbvipgkZdKUhqArFbAEViskIjuHcvJRal0DVlaQmqB_vlm949khfq5N2w4M_blOsFyv1zzQt5XrihxBAO0O5OBqJf_L0sjZ28GcJqpTxuUMz8AYF7LoMJxy5YCgdczLkpTcjPD88j2KCVMLfsGIA9Cwyt1BolGR7Y8FD6aabX7sLrDWZt1BKCVhIara7b0I1viBWR1-iPxRJZZxKrSwxQk-_SMlCBcGCDj19BpAIPbZkjj5GlQnU7OIbmD3flRoCeP4CZdUeHlm_Od9jDRnl3ftoTH9ouGiCjv5FskE8hTciUnil1KG3RuBT1RSd5URpZ-o-X6-qqLqnOy1WmwaeCZf1hcvOqIRtjA2R-UHS1a78Oj2rszSrrNDZ7ypv3qhlazEXuH3RhyRhayzvRXIdSGG9-CSJ6NECS2JQtIcba4F9uxDr8kT4gRcLs53Zt_Ibv1wi3eO2wakfVWuEsTho8v47dgyaHPPPQNyrfS45TLIeJWgawOSE2P3ViyzrEyCWabRWq3GkMRZ85AWA5nVQyb45GRjacmc-vhU3KMBQNwychEFf3Th_7njkmx_Yk&p=9NwGV8Ov71o%3DGvDnjwMsu_lk8V15hrmPeFtKCBAoDX5kGur-cnFinG3YJaQn1aQuAR9smIYB83vu02Gg-EMF1dx2nZR8f2ZuK80kquxvkhMaEUgSy6RBZAnUL1hDH1sF75gkBYuAUjtFtdYxpnqABdiFyVRBtyMKNL5ySEW0dy54-r_5NfI2eiJaf8mwUP6txLh_tj-2WkKWhCF_1uPDIML_Us0d2a1Q7DFCOeHiGwhoqFTkSuca5azYI3po9TelowpO-9y-8n4Xn-0VlH0cg17Xb3Q3myHmjQXRN5DLCG-1LYJ1ohX4SWvkqy9IQzzYS-diJTWVnA9DEqrvbvipgkZPdUKZeI_sDv152Ck1NTMQ8nzjzwa3o9MxgZITLaBd-znk6BWK0wqrpxoYvWcNAIHWvNBoRdigGRY7fk0A9v592hK2a-5iNmhUkjV_5f3vagzlnIzDl52oztqK3-0TiBZnClHULAV0NBt_eatjoZFGialqDTaN25d_qEjyQ4u14G1XJrePtZ3Qq-P2mLKPfL88m0nIqjxLmwXMRJg6vKQWa0s06dqjahI2THzj3KqbqJvtXoi5fKiNeTDJU803pyIWYJ2TFURPnavW4K4VfwMmPUvsBYl_S7xAm8AOZjjGlZbZaaA9tcAHrNxnokak2QFJaQHCe5nklTw5-x8GA2A8YJHZ5NkYVX5jY3Zdh8NgIVCtlQhHiwnFOGVFquRh5sukKGiA8ZzJlUuxnBbbz06aAY_4FFwF-3IJ_tKntyW4LkbqIHzN98XGFv_mxnRhOio65c4sf5e1ON4yE3XyDLFiGBN53-UMaCbZWDpLPX9qRTs4g4bGs6dQOpHccRLejlSooOo5niZxRJtIH9X5YwPEj9rhIjejoUzEIcVk9njk6cJjzcG_WAeB&p=9NwGV8Ov71o%3DGvDnjwMsu_lk8V15hrmPeFtKCBAoDX5kGur-cnFinG3YJaQn1aQuAR9smIYB83vu02Gg-EMF1dx2nZR8f2ZuK80kquxvkhMaEUgSy6RBZAnUL1hDH1sF75gkBYuAUjtFtdYxpnqABdiFyVRBtyMKNL5ySEW0dy54-r_5NfI2eiJaf8mwUP6txLh_tj-2WkKWhCF_1uPDIML_Us0d2a1Q7DFCOeHiGwhoqFTkSuca5azYI3po9TelowpO-9y-8n4Xn-0VlH0cg17Xb3Q3myHmjQXRN5DLCG-1LYJ1ohX4SWvkqy9IQzzYS-diJTWVnA9DEqrvbvipgka4vkoF0Nk1Ik7mAmEdWtABiHheg9xRe_lpY0F6HAA7NSccYnF2qeD1m_KJgjq8l7Enx3Ow7uE05mNkEEPbAeJrZn3Lo7h2l0qBJUvDMVo0iUfA88MXiWlT4KqYIaNfx-EyeFqIzJFqejM6B8B9OhJIGDGx9Q8pcvOhlN9MntL5nB6QYfiwtnAUXwQzL5Vyoy3QnD1MDvyZmKm4-XkrsZMbqz2YF1CXpab3sA7TdbOMDLQ4ULyssjlLg5ONLvRE2yWwQru02eBTDgMrMfdW09dcA-iKunS0H6Nj1P-FPCQTPtVsVOp94yINwhfM1TrrhLeVVkcOtWPH0Uux6gXIz7kLNSReMQjIgf5gAGxv5G44uR7UXJhx2jj21wmpNxjVYKYba0zx3i0GiUGCJg9HhqwHpLIn1PxQraSxMOIOdVdyV5QfjwF2xlHYeYvBFOHBY7CZWKw3WZoaHwXCgNIMQPj0wqiOpRGrbyHs0AOin97pGTPlMvPkIhUlDyep8JL42y0r0ZsgLevcNm44fuCsoc2ayl5mUuN3UHMpDFkZ486l88zRYF3tHxXq&p=9NwGV8Ov71o%3DGvDnjwMsu_lk8V15hrmPeFtKCBAoDX5kGur-cnFinG3YJaQn1aQuAR9smIYB83vu02Gg-EMF1dx2nZR8f2ZuK80kquxvkhMaEUgSy6RBZAnUL1hDH1sF75gkBYuAUjtFtdYxpnqABdiFyVRBtyMKNL5ySEW0dy54-r_5NfI2eiJaf8mwUP6txLh_tj-2WkKWhCF_1uPDIML_Us0d2a1Q7DFCOeHiGwhoqFTkSuca5azYI3po9TelowpO-9y-8n4Xn-0VlH0cg17Xb3Q3myHmjQXRN5DLCG-1LYJ1ohX4SWvkqy9IQzzYS-diJTWVnA9DEqrvbvipgkZU9Iz9ugoe57C97-hwiJp0Nnmkx7AjPMip4wfOogzxV0UYbtLfKUhlcEXJ0KTaywtkSVKUSKvL5b4B6jsjq8EEIdu1hHIa-yX1o4DlX070djrmw1XdmUEuSLDXHjHwTjOB6tPYE_6c8AZmbdIBxWwyrWHJPg0J9QxeIdPOyJkgUzoVRaPDezHu4EHGqcmeAuoJQ9sMoxoA0rKe_6mttGph_cL-t7uAJTo9YEzHxOsei-DCfaocmbUAEFJE0Yyx9qvg1ZzHZpfBm01outJvWCPgbWFj-6rJbDfk-MDuxlNMp2WKni1cLUvytCBnfJzMhUHC9FZv-cvUcpm0EWWjnERsKtGjY8fHikCJMM67jgVd6ww3AA2MOV5mMZL9nFjtnZyiCZQsadXFji9U88zcfdor1wMt3X40CMGWCTzQnFUgp7_JfdaZYPo4o8yaOhkZHda5b1xpLt_gkf0qnpB_sJENun6TAcbYg91xA9dD1N9oI2ghlMOWd_qyhfShVkUt2fb8BNA_jhnOV_RsevMgOhrbKF6L4yU_XKGgya-TzfJKNuu_nLW35Hqu&p=9NwGV8Ov71o%3DGvDnjwMsu_lk8V15hrmPeFtKCBAoDX5kGur-cnFinG3YJaQn1aQuAR9smIYB83vu02Gg-EMF1dx2nZR8f2ZuK80kquxvkhMaEUgSy6RBZAnUL1hDH1sF75gkBYuAUjtFtdYxpnqABdiFyVRBtyMKNL5ySEW0dy54-r_5NfI2eiJaf8mwUP6txLh_tj-2WkKWhCF_1uPDIML_Us0d2a1Q7DFCOeHiGwhoqFTkSuca5azYI3po9TelowpO-9y-8n4Xn-0VlH0cg17Xb3Q3myHmjQXRN5DLCG-1LYJ1ohX4SWvkqy9IQzzYS-diJTWVnA9DEqrvbvipgkbrWo4sMNzSuJcQCVdtHI0j1RJwb6U66zmnvN-1zV9euM2wsgf7hMHwh9GegnzQ69mJDdmoRy6BPu9okcRlc2lQ8so0GJ9aziqORwD1PraSYKcSxJzgUgKXgUvcNs9B2voaTqDdTAbpIG_HCmkcBRadWiSBWP807EJtjoHuDd-ntFZ88G3LkOuwWAcZZd40vUfRRB84U6nsYGEKQ_eiPhrJ7bhXTqJfDuSbsJLkT1sNkwQT67uOO2hV-ZoGo4XV_FvppIPfj79rLc3gc5ZvDVUYXOuPlJmjsbEHj9JSlCeFFip4YCaJo-rjGLaSOcDWUCtLQvni56wniSVgLueHG82bkzQfew4rLamoBpw5LAIapuU0qXmNOctFOkBTvLD2D5PLCDKI7R4RZ9_20pWjLno88sWZyNZQ-eNjMHXEdYRMvJ_6u4T2ArGZVQWuY4nwxY6z8TUb9XUvFRqKxfzmsrbPVHuYmUuMw44-nSquLWsq8EBQ5TOVgO5_1RJ2nuhor0VxJDemchhg38h3YGrL5blhqPiA6eDXW-YLWg_VJc2l420EYIN_7KQw&p=9NwGV8Ov71o%3DGvDnjwMsu_lk8V15hrmPeFtKCBAoDX5kGur-cnFinG3YJaQn1aQuAR9smIYB83vu02Gg-EMF1dx2nZR8f2ZuK80kquxvkhMaEUgSy6RBZAnUL1hDH1sF75gkBYuAUjtFtdYxpnqABdiFyVRBtyMKNL5ySEW0dy54-r_5NfI2eiJaf8mwUP6txLh_tj-2WkKWhCF_1uPDIML_Us0d2a1Q7DFCOeHiGwhoqFTkSuca5azYI3po9TelowpO-9y-8n4Xn-0VlH0cg17Xb3Q3myHmjQXRN5DLCG-1LYJ1ohX4SWvkqy9IQzzYS-diJTWVnA9DEqrvbvipgkZr5WqCPq_rrUAoGD5OClbDozDNyIMOOZqkuDujteYpI0-znKVNLeQaKKiJ7hH65PIIQs9OpQO8GIGHLS2nu_NJQzI6cWc6n9txAlypGjpnyq9fm6BIteZlIebCWDOIvKk1jsNXxuvH2ehNeBkcn9HID86_pcGNoGKUmPuX3SaJ-_QRXNoMXDQOOIUnYXa0MKdbCQD3XNJxOQTRFvk2CF5HE3RbS3MFUDMU4JmUGFesmUjhy9rLMMuyDpifYmYNa8UNDcNHBRHOiEKJMZ-hzG4J2rY5qsppTvStwBeaT_pS7ltCX3E3xCW4p7vYdv8DM1dgHF7xJC7EYmsHMMFfdX_7pHSK3Ju2wDTbNrZ80SJyzgPfkT6bulLuUikqg5hsYtMxlypqWEp2OdsPRUM6rhrAqG7t6qXMWrpYO4J2AG9sst6J4NgwS5R8JKBvs5igRd7INrac5kox7cofQ5xjsmxElHJmO-ue-7gLoZacwpmBfdt18GHdPLr0w5b1A-XnTqoOaxaW3vhVesm3bGzuBF_H1dp2whNg9-E3wPHqIAzrf7no5-4DL_JF&p=9NwGV8Ov71o%3DGvDnjwMsu_lk8V15hrmPeFtKCBAoDX5kGur-cnFinG3YJaQn1aQuAR9smIYB83vu02Gg-EMF1dx2nZR8f2ZuK80kquxvkhMaEUgSy6RBZAnUL1hDH1sF75gkBYuAUjtFtdYxpnqABdiFyVRBtyMKNL5ySEW0dy54-r_5NfI2eiJaf8mwUP6txLh_tj-2WkKWhCF_1uPDIML_Us0d2a1Q7DFCOeHiGwhoqFTkSuca5azYI3po9TelowpO-9y-8n4Xn-0VlH0cg17Xb3Q3myHmjQXRN5DLCG-1LYJ1ohX4SWvkqy9IQzzYS-diJTWVnA9DEqrvbvipgkZr5WqCPq_rrUAoGD5OClbDozDNyIMOOZqkuDujteYpI0-znKVNLeQaKKiJ7hH65PIIQs9OpQO8GIGHLS2nu_NJQzI6cWc6n9txAlypGjpnyq9fm6BIteZlIebCWDOIvKk1jsNXxuvH2ehNeBkcn9HID86_pcGNoGKUmPuX3SaJ-_QRXNoMXDQOOIUnYXa0MKdbCQD3XNJxOQTRFvk2CF5HE3RbS3MFUDMU4JmUGFesmUjhy9rLMMuyDpifYmYNa8ULwkrxxEITFxdlo_GXlu2wWOKHDxAG11yEaAYjB3Koz-772jSxJ3OkYzdrKeIslYTT6SwqCffHYD23b5gjLi0v7H4lx6a-Yj83xGYcu7jXDVUD9dBjyQhq_zGReIMir9E6kZqC3Jz8FM1aHs5V--tW5frW8NKl485EJPwQIpjDER1E4GBzGz9l8CP2qPOiDB07buZCuQFna9t0D47ffhrWcPjloJvDo5BQWmo-9i0_Ftji8qzJCLhK8-lvPMehvggPJeS3d7esOrSi7tIWjyZycy-xFWSY0yjcvO_bzmCTgPcYEBL9VNqJ&p=9NwGV8Ov71o%3DGvDnjwMsu_lk8V15hrmPeFtKCBAoDX5kGur-cnFinG3YJaQn1aQuAR9smIYB83vu02Gg-EMF1dx2nZR8f2ZuK80kquxvkhMaEUgSy6RBZAnUL1hDH1sF75gkBYuAUjtFtdYxpnqABdiFyVRBtyMKNL5ySEW0dy54-r_5NfI2eiJaf8mwUP6txLh_tj-2WkKWhCF_1uPDIML_Us0d2a1Q7DFCOeHiGwhoqFTkSuca5azYI3po9TelowpO-9y-8n4Xn-0VlH0cg17Xb3Q3myHmjQXRN5DLCG-1LYJ1ohX4SWvkqy9IQzzYS-diJTWVnA9DEqrvbvipgkYB5rWnZ2o4-ekKpSnLuvbs6pHMq1kHJzaCiVk24GzWN68HAdZnxPVELi5nYczyqu5oScIUUBuzkEvZb2xMnbRDCm_N_aJv6_UxVpgMNRkrbEkKWJeU_B9oz0jxZlGGcjQMBiK1jxuSXszvu8BBpMavuvx-BlZU9pcG5SoxAwyE_i1pl8t6aAMZOa3GG2yspjw82SYzURggEzm8CvfmPA0RdZjUbfGDRmK5S8Q3R918D1w0TgNLMEM8CU8PYr8ZNiF9eC8Ou7h841SxKgnunJWYYBZWxyfhRBgVStYOaG1HSbkzoN2y-CmFolDWuPVjfKs1eAb3xs3nWTC2rjYumOZMxZI1nBUT6prICr487UcD4v7ha7HqRFOPoc17KYOpT5AqectgTxPUjphilWwvG04-MaGC_pkCA1cZ93s97BNKDEvdWsSkND_G_5LJctcKZu8O7Q2UX8_QgQkFD2TMF47_Xm-7yA2x8ZtsucGI_3_V-tV5gTxwnNMeUsE7h2GmpBJ3Y_k8HCYQSubfaRgZSB4Nb2cjmz9dF6EDNP4aOPwtIlmT1PMamK6H&p=9NwGV8Ov71o%3DGvDnjwMsu_lk8V15hrmPeFtKCBAoDX5kGur-cnFinG3YJaQn1aQuAR9smIYB83vu02Gg-EMF1dx2nZR8f2ZuK80kquxvkhMaEUgSy6RBZAnUL1hDH1sF75gkBYuAUjtFtdYxpnqABdiFyVRBtyMKNL5ySEW0dy54-r_5NfI2eiJaf8mwUP6txLh_tj-2WkKWhCF_1uPDIML_Us0d2a1Q7DFCOeHiGwhoqFTkSuca5azYI3po9TelowpO-9y-8n4Xn-0VlH0cg17Xb3Q3myHmjQXRN5DLCG-1LYJ1ohX4SWvkqy9IQzzYS-diJTWVnA9DEqrvbvipgkZaU1jEVt9CWLDiFVKeMdO81JZ2va1R9cgRrNDsh22X5OjISimyCv6d2lf4PzAnXKGuG8pJZdG-5ZSZEJofilzTdqN2qWT-VyGPUc_1ATJdF_ZylMEokNumCIqfcbwyy6MdIm_7JhkgqCGR_2luVJpZprwOm_wopQPbO4vxTPqRj0jAx7ZDeCoDBVUw24Cym6eBsODthxZLS07xr1ZFPRJv1zs5AxSTFemVW2mmBZj5KWUq9IIC55N5LoUJcpOYkVqjJyi_QAyG8Vs19CCwGI2GvlFFq4Q43QjUeulw9vzK5BT7nygtkHMz_khJ8Bai6ixzwJCP8kCsbffV1TAGXdikuV2cJJlOku9-1QMIWMov6s-6xI08Sf2R_RKe_Lsvgcxl9WR0-WNPY2U5qwGSBTnNjtuLDVJuxYkhGHZK99DHsGKkYtJsJWmRWSLRTdkF5eOA1Y9WFPcXs7y0VvI0VlUY2zd_9RL9gvWeeoVHRVhy8G5izNUnH5MzQYJisQAnWNpPdpsymF69F7YYyqHT_6NxurissDRgOXDbLtIRzeYmZ3ZLGKK_a1gk&p=9NwGV8Ov71o%3DGvDnjwMsu_lk8V15hrmPeFtKCBAoDX5kGur-cnFinG3YJaQn1aQuAR9smIYB83vu02Gg-EMF1dx2nZR8f2ZuK80kquxvkhMaEUgSy6RBZAnUL1hDH1sF75gkBYuAUjtFtdYxpnqABdiFyVRBtyMKNL5ySEW0dy54-r_5NfI2eiJaf8mwUP6txLh_tj-2WkKWhCF_1uPDIML_Us0d2a1Q7DFCOeHiGwhoqFTkSuca5azYI3po9TelowpO-9y-8n4Xn-0VlH0cg17Xb3Q3myHmjQXRN5DLCG-1LYJ1ohX4SWvkqy9IQzzYS-diJTWVnA9DEqrvbvipgka9YiG4wN9seO31S-O7yy-324b6ibxqYUh65R7kZMP-fFmTlU1Su7_xfcLCraNAeSvZn0KhSVF4GL9-5xf32NH-1ZFf5Rv2PQ8vxjFCOrDC9QbPzikwE4aOo4f7RKD3-mlOFFOlro6WN53GbRWPxq_WOBCZlDXybe3yyeASEgMEeUeRmEgi94ydwJRu-d_kpLZifO6R9EGFfODkBQAwAgsTZUbBKMmobeSn-c6dsO9djQPg45xpJvP5Nvi-QSYuiXzmJnOYMvyUMSZvHOgky5pQkJi5EDSG1IfG3q4boV58K2axDO1ffu_SHBuaXZsOkyrwTZAsnvAH6NqriY47XfqqkrrL9xIZhz0l9BKyoB9bROzIDvLCiViDkENPO3ezMTzXmipja_mGEYklRpf6kQZnIkKKXF7ZbVZzjzcHo5rJMjimYJjZrSf_A_dwXyWHxP_CDqaYjOsk0wvr3A315nGBcvFDqI-jAcUGoq12kVqOn1Q8VAa0llWIoqeBoFuEWYRLKzv947j8AKeXwXDerlNdh1KBWfZyD_A1uQcYmkjVov0TiYn-oq-V&p=9NwGV8Ov71o%3DGvDnjwMsu_lk8V15hrmPeFtKCBAoDX5kGur-cnFinG3YJaQn1aQuAR9smIYB83vu02Gg-EMF1dx2nZR8f2ZuK80kquxvkhMaEUgSy6RBZAnUL1hDH1sF75gkBYuAUjtFtdYxpnqABdiFyVRBtyMKNL5ySEW0dy54-r_5NfI2eiJaf8mwUP6txLh_tj-2WkKWhCF_1uPDIML_Us0d2a1Q7DFCOeHiGwhoqFTkSuca5azYI3po9TelowpO-9y-8n4Xn-0VlH0cg17Xb3Q3myHmjQXRN5DLCG-1LYJ1ohX4SWvkqy9IQzzYS-diJTWVnA9DEqrvbvipgkbNvXA003v10FYAM_5uuVhAxS0u4VV1Y5hVjRV9CzRmJzSHETn4XoOomhtUa_4IfkRoCDCVEhPmhDTelVmo-gTUH9HXOAF2KxS8k9ZGtc5WhLWmwB5ql5QcZleJxFz2WL8qXyx7iZH0OovRXSR3y1nstfMGB8TkSGp4SzfP_gwbNSbJhoCsfuZuAWA8GLwN9xmioIBAeegW0KVu8ly0KMtR3giqhZ00VrDjC3oyaGZ2gQqBugqZ2mb3mGe_G2YaTy7uN-dfJA-gPbWFazUFMXQxXkmTSXBBo7NhLN6goYwyNhHHAa0FAYOy57UxLLxZt2qtYUn5lRd5RLxOpkRb3-Yjd9v4Fxulqb4ersHiR4IP_p8N_5hnBuTEizklkzr_EUSNWswA6uquHRjWNrOP5yw75DpHgt30P9aJVJ2xMo_ntUHFqBaeAIndKT9M5AhnZ1SKuj82iE1YvXZKLITQV21fFtbnWL4ye0-ElGGI6oRFAHLnVs3sAk3gOmmZ5PrSRl5T_HXgsuiUFx12Yjn9tFiVFdeEgs-Ev0Xb_Ca0jecrRNN1LiptAK4H&p=9NwGV8Ov71o%3DGvDnjwMsu_lk8V15hrmPeFtKCBAoDX5kGur-cnFinG3YJaQn1aQuAR9smIYB83vu02Gg-EMF1dx2nZR8f2ZuK80kquxvkhMaEUgSy6RBZAnUL1hDH1sF75gkBYuAUjtFtdYxpnqABdiFyVRBtyMKNL5ySEW0dy54-r_5NfI2eiJaf8mwUP6txLh_tj-2WkKWhCF_1uPDIML_Us0d2a1Q7DFCOeHiGwhoqFTkSuca5azYI3po9TelowpO-9y-8n4Xn-0VlH0cg17Xb3Q3myHmjQXRN5DLCG-1LYJ1ohX4SWvkqy9IQzzYS-diJTWVnA9DEqrvbvipgkaxxCvPAPC-LXCuXv3GAVQxOj2HFTofLMp-GpXQiaxG4BSXO0MQWp0WOMFQvIGZ1ICKrabOZr2-ONp7-cfGAK1MXkL08Jcu6pI_dpNk80td8aWyQ_Ni1AdwaXLqdxeLukDkSWC-3Yur1s-CE6-C40r8MGcphKWtrVxwneE6Lug0dYWuUaWG_aulMD3JGxfpyvg-e1U7QPzcMddIf--ADmJvQ_vvHCCrg0p6-AR3MB7VLXoBV68_fQB-q2P0aaOcWZow1c1tYeolVM5TtSrJD7e8sdeck8gXUvkXSz0Dpx_b8yNZ8W7kbuw_ydPZDwKb5vN_FjIehStqnwFRr_AnQobEHEEipBzKXeYj7g-eqBRDxYKcwk-ISboq1QfOe97fDzNeWMLIaYZkrgEeGEq1Z2233oQ98za6BFDq_LzXlGxcavEp1jXFeKcMgm2cgfjIvveY_FMSSZgUA2ti5PLVVOSG9THDzFQxD26B0gNuUgeup-v_ohFVEc3gHGDJYeJ-ZF6xMaEqhSPxNea9SQsva5TqzCvAdRrqGNTVRHBoZAc5E0rU-2q2MteF&p=9NwGV8Ov71o%3DGvDnjwMsu_lk8V15hrmPeFtKCBAoDX5kGur-cnFinG3YJaQn1aQuAR9smIYB83vu02Gg-EMF1dx2nZR8f2ZuK80kquxvkhMaEUgSy6RBZAnUL1hDH1sF75gkBYuAUjtFtdYxpnqABdiFyVRBtyMKNL5ySEW0dy54-r_5NfI2eiJaf8mwUP6txLh_tj-2WkKWhCF_1uPDIML_Us0d2a1Q7DFCOeHiGwhoqFTkSuca5azYI3po9TelowpO-9y-8n4Xn-0VlH0cg17Xb3Q3myHmjQXRN5DLCG-1LYJ1ohX4SWvkqy9IQzzYS-diJTWVnA9DEqrvbvipgkYSqgZ1HGHEk_PJVTRPry8AGzEmH8-r4NFUyzMUCPTs4QOy_UVNCBBA_ealDT1-gYlj3buRjFejHOExQ3YmhqNDlS-BrFCZRo3fQEpBgh6OKLlYJG7rc9xWUbpCNJjB6lILMkytHLWFE12UMEMskkZxnqQZoQsSW3EdSLzKVqmDZUevbls629l1j8K91jFWmcoOIBLBJjPMmLkqumV1RFTfnKqDYxVYw71VWdNEVdwb8bQXY00TkmIX6HrCivhH4bm51u9LDSGbjlcxskEGBEOA7mBA1vHwbZuxL9KzaDZ8Z-1X9WjspLwqe3EXS18S_LsVrOzbNwM6e09W_LaLoNyW0K13CXDduyqhF_2pR8sQTzsUKKYG0lh8N4lvnrlNusTF91KQ10zyRcNXUd5Dfjbrbl8OSZijZUwtEiXebugzojA3C0QLojnSLkX95yhgJgPdaYcaVdelaj0NEbOQVCTIkZPvQ36Kog9Xkb4EXXlmswshqXPM1G8WJrsfkGuzyqoUeaFxn5rgJNwC0FukqrGA0S6zbdkEWSrrPrnkzmzkFwmxk-uwytbo&p=9NwGV8Ov71o%3DGvDnjwMsu_lk8V15hrmPeFtKCBAoDX5kGur-cnFinG3YJaQn1aQuAR9smIYB83vu02Gg-EMF1dx2nZR8f2ZuK80kquxvkhMaEUgSy6RBZAnUL1hDH1sF75gkBYuAUjtFtdYxpnqABdiFyVRBtyMKNL5ySEW0dy54-r_5NfI2eiJaf8mwUP6txLh_tj-2WkKWhCF_1uPDIML_Us0d2a1Q7DFCOeHiGwhoqFTkSuca5azYI3po9TelowpO-9y-8n4Xn-0VlH0cg17Xb3Q3myHmjQXRN5DLCG-1LYJ1ohX4SWvkqy9IQzzYS-diJTWVnA9DEqrvbvipgkY_b_A0r00UNjOXMTMxPorCKAq8spu3enX5ypSg_1PdgbNXzmrW11V5zP62unr9t4v4EAlQRP8EfxWuGyi-POwVvRPe2kgOhBXOtjDP06HWOYsL1b1Rhu--nkXOGf5lfho9VbX7nNHTgX2-4ErqfxQVmxuo7xVh-BKef5M2xU510gnyx5xawfFrJSTGdI9AxmPgYuo6fe4sN0NpN63RshAUAomXx5ZH1TcawMpbsJ23vfft-oczVMWiyvSLEETZwOhM12ZGg0Ygkwt94eIiUiTekhp41bsHyxdipkyjoSn_hd2LysEHLPYwu3aD9Ue9clIvC4u6kuJ0ORdtkTsQ5fD85FmnjYrtZbj4SwYuKzb2cga1H8qnlCgt07Kyu3UB2EjSd5b3ladabz8yh_6ZiJ0NCJoR7_qd4Gla_CLM67DwKmeniXhy0OdwTeRXnzPcVRhEElJu8PtZ19JzhQi06B6851hd6nBliJEJVj5KuR4vpuVs4FIg-KSIVUqXHEQmjMjn5DC6h9LTHBYexP6mmZa9VmkB5urpUBsG2i_OXoZ6ortJLTH7PyeE&p=9NwGV8Ov71o%3DGvDnjwMsu_lk8V15hrmPeFtKCBAoDX5kGur-cnFinG3YJaQn1aQuAR9smIYB83vu02Gg-EMF1dx2nZR8f2ZuK80kquxvkhMaEUgSy6RBZAnUL1hDH1sF75gkBYuAUjtFtdYxpnqABdiFyVRBtyMKNL5ySEW0dy54-r_5NfI2eiJaf8mwUP6txLh_tj-2WkKWhCF_1uPDIML_Us0d2a1Q7DFCOeHiGwhoqFTkSuca5azYI3po9TelowpO-9y-8n4Xn-0VlH0cg17Xb3Q3myHmjQXRN5DLCG-1LYJ1ohX4SWvkqy9IQzzYS-diJTWVnA9DEqrvbvipgkY_b_A0r00UNjOXMTMxPorCKAq8spu3enX5ypSg_1PdgbNXzmrW11V5zP62unr9t4v4EAlQRP8EfxWuGyi-POwVvRPe2kgOhBXOtjDP06HWOYsL1b1Rhu--nkXOGf5lfho9VbX7nNHTgX2-4ErqfxQVmxuo7xVh-BKef5M2xU510gnyx5xawfFrJSTGdI9AxmPgYuo6fe4sN0NpN63RshAUAomXx5ZH1TcawMpbsJ23vfft-oczVMWiyvSLEETZwOhufSTBj_uH-lNaJFdSZLZ5NFjS01t3nyUZxAJ36ivUJVLt3CJctXMb_XVnXU50-rU4-BlkqBbR6uEVSs-sOwBaGoCwJgS7LJrdCKTVYBJSaWgdNPjJsZRj6rvrTJ42c3o263gKdu1Uge5kNc4pIXU2Q7uzXEOL3NGk8DT7p0fAkvJLnTPUF5lJI2S508W0ILf8qIdI2wSwPBAS0mMHMfWzghsJgRr38fbXLg5kqyj-BeWbI07m5f3Bqod7WSyIUxlMfLOTC6Q1DzdyJjGYaC8-uvAjZ3ddGypQl1vnwRh8LaCdTkAI1CZ4&p=9NwGV8Ov71o%3DGvDnjwMsu_lk8V15hrmPeFtKCBAoDX5kGur-cnFinG3YJaQn1aQuAR9smIYB83vu02Gg-EMF1dx2nZR8f2ZuK80kquxvkhMaEUgSy6RBZAnUL1hDH1sF75gkBYuAUjtFtdYxpnqABdiFyVRBtyMKNL5ySEW0dy54-r_5NfI2eiJaf8mwUP6txLh_tj-2WkKWhCF_1uPDIML_Us0d2a1Q7DFCOeHiGwhoqFTkSuca5azYI3po9TelowpO-9y-8n4Xn-0VlH0cg17Xb3Q3myHmjQXRN5DLCG-1LYJ1ohX4SWvkqy9IQzzYS-diJTWVnA9DEqrvbvipgkY2HXzwsng18ZJlyuWImY_8z2IbUfiD3y5xOF-x04DajRWuUXVkuY6wW7l4CgaPaVx0No7aj40HIEgKZl34id68qhBLWRadSMK2ih5tmx4jlyMIRqgAWtChYxBY65SaCsJBC_5aWO7iExO_WIHgs7RQXPca-gvZzM6uVqsOlVwep62rh47tLYcB9XXJpvfQOw6qJ3Cu89w2eK-lvr3h44g921JjC8m-rPDi-sP5SSPked8xzOWdE0LbSBWYePs9AXq-2bl9jB3K9T-JqpMDvPnuP3il6SsTt-wW5U5ylKggHwBLw82zjIVnq3chstruuYEoHpcNKZRR2UegMtDVS2UUBoFEK2X0UJTafpHG74Ne_fMfx9ebiXkhmzAFj-DIlD3pVnX0ygNK1-0L565pfGpAZ1LAxMUA6SU3NMFn1op59TXkaBns1qCvLbW65lib680gs838sRMjrNLdOnRKjA6RtVBq5EXpBZHnvKGGavOVI4rWPZQ2675_M-9ahVfKBbjLqQ8uPNiJCQ7-aRt29Dmrs7BV"//填
let smallzq = false;
let indexLast = $.getdata('zqbody_index');
let artsnum = 0, videosnum = 0;
let videoscore = 0,readscore = 0;
let artArr = [], delbody = 0;
if (isGetbody = typeof $request !==`undefined`) {
   Getbody();
   $done()
} 
let lastIndex = $.getdata('zqbody_index')
if (!$.isNode() && !YouthBody == true) {
    $.log("您未获取阅读请求，请求阅读后获取")
    $.msg($.name, "您未获取阅读请求，请求阅读后获取", "", {
        'open-url': "https://kandian.youth.cn/u/UnEWm"
    })
    return
} else if (YouthBody.indexOf("&") == -1) {
    ReadArr.push(YouthBody)
} 
    
     else if ( YouthBody.indexOf("&") > -1) {
        YouthBody = YouthBody.split("&")
    };
    Object.keys(YouthBody).forEach((item) => {
        if (YouthBody[item]) {
            ReadArr.push(YouthBody[item])
        }
    })

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
   
    $.index = 0;
    for (var i = indexLast ? indexLast : 0; i < ReadArr.length; i++) {
        if (ReadArr[i]) {
            articlebody = ReadArr[i];
            $.index = $.index + 1;
            $.log(`-------------------------\n开始中青看点第${$.index}次阅读\n`);
            await $.wait(10000);
            await AutoRead();
        }
    };
   
    $.log("本次共阅读" + artsnum + "次资讯，共获得" + readscore + "青豆\n观看" + videosnum + "次视频，获得" + videoscore + "青豆(不含0青豆次数)\n");
    console.log(`-------------------------\n\n中青看点共完成${$.index}次阅读，共计获得${readscore+videoscore}个青豆，阅读请求全部结束`);
    $.msg($.name, `本次运行共完成${$.index}次阅读，共计获得${readscore+videoscore}个青豆`,"删除"+delbody+"个请求"+(readtimes?"，阅读时长"+parseInt(readtimes)+"分钟":""))
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())


function AutoRead() {
    return new Promise((resolve, reject) => {
        $.post(batHost('article/complete.json', articlebody), async(error, response, data) => {
         if(isJSON(data)){
           let readres = JSON.parse(data);
            //$.log(JSON.stringify(readres,null,2))
            if (readres.items.complete == 1) {
                $.log(readres.items.max_notice)
            } else {
                if (readres.error_code == '0' && data.indexOf("read_score") > -1 && readres.items.read_score > 0) {
                    console.log(`本次阅读获得${readres.items.read_score}个青豆，请等待30s后执行下一次阅读`);
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
                               timebodyVal = "" //填
                        }
                        await readTime()
                    };
                    if ($.index == ReadArr.length) {
                        $.log($.index + "次任务已全部完成，即将结束")
                    } else {
                        await $.wait(20000);
                    }
                } else if (readres.error_code == '0' && data.indexOf('"score":0') > -1 && readres.items.score == 0) {
                    $.log(`本次阅读获得0个青豆，等待10s即将开始下次阅读`);
                } else if (readres.success == false) {
                    console.log(`第${$.index}次阅读请求有误，请删除此请求`);
                   
                    
                }
            }
         }else{ $.log("此body数据读取出错，跳过");}
            resolve()
        })
    })
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

function isJSON(str) {
    if (typeof str == 'string') {
        try {
            JSON.parse(str)
            return true
        } catch (e) {
            return false
        }
    } else {
        return false
    }
}



function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
