import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Award, ChefHat, ChevronLeft, ChevronRight, Clock, Coffee, Facebook, Flame, GraduationCap, Instagram, Mail, MapPin, Menu, Phone, PlayCircle, Quote, Star, Tent, Users, Utensils, Wine, X, ZoomIn } from "lucide-react";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region src/assets/galerija-nova/IMG_4802.JPG
var IMG_4802_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4802_default });
var IMG_4802_default = "/assets/IMG_4802-Creng9aX.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4814.JPG
var IMG_4814_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4814_default });
var IMG_4814_default = "/assets/IMG_4814-CrOtk6bd.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4815.JPG
var IMG_4815_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4815_default });
var IMG_4815_default = "/assets/IMG_4815-5GJOxfRp.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4816.JPG
var IMG_4816_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4816_default });
var IMG_4816_default = "/assets/IMG_4816-el2sUi7N.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4817.JPG
var IMG_4817_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4817_default });
var IMG_4817_default = "/assets/IMG_4817-CcT7aD4P.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4818.JPG
var IMG_4818_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4818_default });
var IMG_4818_default = "/assets/IMG_4818-DbX8suMF.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4819.JPG
var IMG_4819_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4819_default });
var IMG_4819_default = "/assets/IMG_4819-3ewoKI-V.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4820.JPG
var IMG_4820_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4820_default });
var IMG_4820_default = "/assets/IMG_4820-rE8tfjYf.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4821.JPG
var IMG_4821_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4821_default });
var IMG_4821_default = "/assets/IMG_4821-TT1jppzW.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4822.JPG
var IMG_4822_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4822_default });
var IMG_4822_default = "/assets/IMG_4822-C74Ct677.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4823.JPG
var IMG_4823_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4823_default });
var IMG_4823_default = "/assets/IMG_4823-D2qSIWWa.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4824.JPG
var IMG_4824_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4824_default });
var IMG_4824_default = "/assets/IMG_4824-Bmsxf5Cl.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4825.JPG
var IMG_4825_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4825_default });
var IMG_4825_default = "/assets/IMG_4825-Cq1y6QC5.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4826.JPG
var IMG_4826_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4826_default });
var IMG_4826_default = "/assets/IMG_4826-DVT5llHZ.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4827.JPG
var IMG_4827_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4827_default });
var IMG_4827_default = "/assets/IMG_4827-BnUNoS7F.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4828.JPG
var IMG_4828_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4828_default });
var IMG_4828_default = "/assets/IMG_4828-D6uEVrGX.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4829.JPG
var IMG_4829_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4829_default });
var IMG_4829_default = "/assets/IMG_4829-BkepHgqk.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4830.JPG
var IMG_4830_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4830_default });
var IMG_4830_default = "/assets/IMG_4830-FbyILtHZ.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4831.JPG
var IMG_4831_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4831_default });
var IMG_4831_default = "/assets/IMG_4831-CpuCa6eM.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4832.JPG
var IMG_4832_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4832_default });
var IMG_4832_default = "/assets/IMG_4832-DpUtBf52.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4833.JPG
var IMG_4833_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4833_default });
var IMG_4833_default = "/assets/IMG_4833-CTcOuQ2w.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4834.JPG
var IMG_4834_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4834_default });
var IMG_4834_default = "/assets/IMG_4834-DfWmIuAr.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4835.JPG
var IMG_4835_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4835_default });
var IMG_4835_default = "/assets/IMG_4835-CSXbCMKi.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4836.JPG
var IMG_4836_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4836_default });
var IMG_4836_default = "/assets/IMG_4836-6DETv6S9.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4837.JPG
var IMG_4837_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4837_default });
var IMG_4837_default = "/assets/IMG_4837-C0Q1s7vT.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4838.JPG
var IMG_4838_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4838_default });
var IMG_4838_default = "/assets/IMG_4838-BP24eZF6.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4839.JPG
var IMG_4839_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4839_default });
var IMG_4839_default = "/assets/IMG_4839-D3b2e9DE.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4840.JPG
var IMG_4840_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4840_default });
var IMG_4840_default = "/assets/IMG_4840-Dp0CbEEg.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4841.JPG
var IMG_4841_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4841_default });
var IMG_4841_default = "/assets/IMG_4841-CcGPxibF.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4842.JPG
var IMG_4842_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4842_default });
var IMG_4842_default = "/assets/IMG_4842-BNDXSUUC.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4843.JPG
var IMG_4843_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4843_default });
var IMG_4843_default = "/assets/IMG_4843-DYroVY0o.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4844.JPG
var IMG_4844_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4844_default });
var IMG_4844_default = "/assets/IMG_4844-Cs8tSK4C.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4845.JPG
var IMG_4845_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4845_default });
var IMG_4845_default = "/assets/IMG_4845-UtKKg-Ja.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4846.JPG
var IMG_4846_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4846_default });
var IMG_4846_default = "/assets/IMG_4846-D6_rdMRD.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4847.JPG
var IMG_4847_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4847_default });
var IMG_4847_default = "/assets/IMG_4847-D4IhTpzj.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4848.JPG
var IMG_4848_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4848_default });
var IMG_4848_default = "/assets/IMG_4848-fb2aLBqD.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4849.JPG
var IMG_4849_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4849_default });
var IMG_4849_default = "/assets/IMG_4849-CTITDWtn.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4850.JPG
var IMG_4850_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4850_default });
var IMG_4850_default = "/assets/IMG_4850-CggIWOw4.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4851.JPG
var IMG_4851_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4851_default });
var IMG_4851_default = "/assets/IMG_4851-CL9OInL7.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4852.JPG
var IMG_4852_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4852_default });
var IMG_4852_default = "/assets/IMG_4852-BtLRxsTQ.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4853.JPG
var IMG_4853_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4853_default });
var IMG_4853_default = "/assets/IMG_4853-BLNZIxqb.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4854.JPG
var IMG_4854_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4854_default });
var IMG_4854_default = "/assets/IMG_4854-C1-JxiOc.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4855.JPG
var IMG_4855_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4855_default });
var IMG_4855_default = "/assets/IMG_4855-BuBh1lp2.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4856.JPG
var IMG_4856_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4856_default });
var IMG_4856_default = "/assets/IMG_4856-BrAGkWMB.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4857.JPG
var IMG_4857_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4857_default });
var IMG_4857_default = "/assets/IMG_4857-DkYfM3CH.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4858.JPG
var IMG_4858_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4858_default });
var IMG_4858_default = "/assets/IMG_4858-BigYdkl7.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4859.JPG
var IMG_4859_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4859_default });
var IMG_4859_default = "/assets/IMG_4859-Bz20YVBl.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4860.JPG
var IMG_4860_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4860_default });
var IMG_4860_default = "/assets/IMG_4860-DW06AQe_.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4861.JPG
var IMG_4861_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4861_default });
var IMG_4861_default = "/assets/IMG_4861-Dk_cvnrh.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4862.JPG
var IMG_4862_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4862_default });
var IMG_4862_default = "/assets/IMG_4862-CJ2262tu.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4863.JPG
var IMG_4863_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4863_default });
var IMG_4863_default = "/assets/IMG_4863-BGEEZMVA.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4864.JPG
var IMG_4864_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4864_default });
var IMG_4864_default = "/assets/IMG_4864-B0M8YmqY.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4865.JPG
var IMG_4865_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4865_default });
var IMG_4865_default = "/assets/IMG_4865-Dx9KV12e.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4866.JPG
var IMG_4866_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4866_default });
var IMG_4866_default = "/assets/IMG_4866-CnH8vIYB.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4867.JPG
var IMG_4867_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4867_default });
var IMG_4867_default = "/assets/IMG_4867-DS3jVDiz.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4868.JPG
var IMG_4868_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4868_default });
var IMG_4868_default = "/assets/IMG_4868-UHBRmwpu.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4869.JPG
var IMG_4869_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4869_default });
var IMG_4869_default = "/assets/IMG_4869-BFcT1iYv.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4870.JPG
var IMG_4870_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4870_default });
var IMG_4870_default = "/assets/IMG_4870-DNQBWLF4.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4871.JPG
var IMG_4871_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4871_default });
var IMG_4871_default = "/assets/IMG_4871-ClHy6Ses.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4872.JPG
var IMG_4872_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4872_default });
var IMG_4872_default = "/assets/IMG_4872-jSHyCmj7.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4873.JPG
var IMG_4873_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4873_default });
var IMG_4873_default = "/assets/IMG_4873-V35iEt3e.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4875.JPG
var IMG_4875_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4875_default });
var IMG_4875_default = "/assets/IMG_4875-UUmknoDz.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4876.JPG
var IMG_4876_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4876_default });
var IMG_4876_default = "/assets/IMG_4876-BjhNO4fs.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4877.JPG
var IMG_4877_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4877_default });
var IMG_4877_default = "/assets/IMG_4877-CFIMAakY.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4878.JPG
var IMG_4878_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4878_default });
var IMG_4878_default = "/assets/IMG_4878-CtFwCKDN.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4879.JPG
var IMG_4879_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4879_default });
var IMG_4879_default = "/assets/IMG_4879-D0lEnndm.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4880.JPG
var IMG_4880_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4880_default });
var IMG_4880_default = "/assets/IMG_4880-BJ5dFFhn.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4881.JPG
var IMG_4881_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4881_default });
var IMG_4881_default = "/assets/IMG_4881-yVVAL6Vf.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4882.JPG
var IMG_4882_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4882_default });
var IMG_4882_default = "/assets/IMG_4882-C8yNd3q8.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4883.JPG
var IMG_4883_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4883_default });
var IMG_4883_default = "/assets/IMG_4883-Cn5eruvi.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4884.JPG
var IMG_4884_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4884_default });
var IMG_4884_default = "/assets/IMG_4884-BrE0OBxo.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4885.JPG
var IMG_4885_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4885_default });
var IMG_4885_default = "/assets/IMG_4885-D8BNvlGV.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4886.JPG
var IMG_4886_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4886_default });
var IMG_4886_default = "/assets/IMG_4886-Dz81372f.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4887.JPG
var IMG_4887_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4887_default });
var IMG_4887_default = "/assets/IMG_4887-DitoY0yk.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4888.JPG
var IMG_4888_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4888_default });
var IMG_4888_default = "/assets/IMG_4888-Cxmmeji6.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4889.JPG
var IMG_4889_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4889_default });
var IMG_4889_default = "/assets/IMG_4889-0dhhLP8F.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4890.JPG
var IMG_4890_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4890_default });
var IMG_4890_default = "/assets/IMG_4890-dBSV61dX.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4891.JPG
var IMG_4891_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4891_default });
var IMG_4891_default = "/assets/IMG_4891-BiathGgi.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4892.JPG
var IMG_4892_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4892_default });
var IMG_4892_default = "/assets/IMG_4892-DJLacasl.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4893.JPG
var IMG_4893_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4893_default });
var IMG_4893_default = "/assets/IMG_4893-BhAm8Syk.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4894.JPG
var IMG_4894_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4894_default });
var IMG_4894_default = "/assets/IMG_4894-CzX84NHt.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4895.JPG
var IMG_4895_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4895_default });
var IMG_4895_default = "/assets/IMG_4895-B_VgdO42.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4896.JPG
var IMG_4896_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4896_default });
var IMG_4896_default = "/assets/IMG_4896-BJ7rra8Q.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4897.JPG
var IMG_4897_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4897_default });
var IMG_4897_default = "/assets/IMG_4897-BM4ZBk7e.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4898.JPG
var IMG_4898_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4898_default });
var IMG_4898_default = "/assets/IMG_4898-ZUki0335.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4899.JPG
var IMG_4899_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4899_default });
var IMG_4899_default = "/assets/IMG_4899-BKyAZfzJ.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4900.JPG
var IMG_4900_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4900_default });
var IMG_4900_default = "/assets/IMG_4900-CWfBRczT.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4901.JPG
var IMG_4901_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4901_default });
var IMG_4901_default = "/assets/IMG_4901-B514lqWK.JPG";
//#endregion
//#region src/assets/galerija-nova/IMG_4902.JPG
var IMG_4902_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_4902_default });
var IMG_4902_default = "/assets/IMG_4902-CZk9NI80.JPG";
//#endregion
//#region src/assets/galerija-nova/certifikat.JPG
var certifikat_exports = /* @__PURE__ */ __exportAll({ default: () => certifikat_default });
var certifikat_default = "/assets/certifikat-th7wWqZo.JPG";
//#endregion
//#region src/assets/vinska-radionica/vinska-radionica-1.JPG
var vinska_radionica_1_exports = /* @__PURE__ */ __exportAll({ default: () => vinska_radionica_1_default });
var vinska_radionica_1_default = "/assets/vinska-radionica-1-CZ2Vb8XZ.JPG";
//#endregion
//#region src/assets/vinska-radionica/vinska-radionica-10.JPG
var vinska_radionica_10_exports = /* @__PURE__ */ __exportAll({ default: () => vinska_radionica_10_default });
var vinska_radionica_10_default = "/assets/vinska-radionica-10-DzXDNiSK.JPG";
//#endregion
//#region src/assets/vinska-radionica/vinska-radionica-2.JPG
var vinska_radionica_2_exports = /* @__PURE__ */ __exportAll({ default: () => vinska_radionica_2_default });
var vinska_radionica_2_default = "/assets/vinska-radionica-2-BMM05JJ5.JPG";
//#endregion
//#region src/assets/vinska-radionica/vinska-radionica-3.JPG
var vinska_radionica_3_exports = /* @__PURE__ */ __exportAll({ default: () => vinska_radionica_3_default });
var vinska_radionica_3_default = "/assets/vinska-radionica-3-fSRy3lKs.JPG";
//#endregion
//#region src/assets/vinska-radionica/vinska-radionica-4.JPG
var vinska_radionica_4_exports = /* @__PURE__ */ __exportAll({ default: () => vinska_radionica_4_default });
var vinska_radionica_4_default = "/assets/vinska-radionica-4-D0BiWwht.JPG";
//#endregion
//#region src/assets/vinska-radionica/vinska-radionica-5.JPG
var vinska_radionica_5_exports = /* @__PURE__ */ __exportAll({ default: () => vinska_radionica_5_default });
var vinska_radionica_5_default = "/assets/vinska-radionica-5-AY3VMKCs.JPG";
//#endregion
//#region src/assets/vinska-radionica/vinska-radionica-6.JPG
var vinska_radionica_6_exports = /* @__PURE__ */ __exportAll({ default: () => vinska_radionica_6_default });
var vinska_radionica_6_default = "/assets/vinska-radionica-6-BdAleQzL.JPG";
//#endregion
//#region src/assets/vinska-radionica/vinska-radionica-7.JPG
var vinska_radionica_7_exports = /* @__PURE__ */ __exportAll({ default: () => vinska_radionica_7_default });
var vinska_radionica_7_default = "/assets/vinska-radionica-7-C29ntHNK.JPG";
//#endregion
//#region src/assets/vinska-radionica/vinska-radionica-8.JPG
var vinska_radionica_8_exports = /* @__PURE__ */ __exportAll({ default: () => vinska_radionica_8_default });
var vinska_radionica_8_default = "/assets/vinska-radionica-8-ClcUfrQn.JPG";
//#endregion
//#region src/assets/vinska-radionica/vinska-radionica-9.JPG
var vinska_radionica_9_exports = /* @__PURE__ */ __exportAll({ default: () => vinska_radionica_9_default });
var vinska_radionica_9_default = "/assets/vinska-radionica-9-BMT-zCaP.JPG";
//#endregion
//#region src/assets/andjelagaco.jpg
var andjelagaco_default = "/assets/andjelagaco-O3EUOP1S.jpg";
//#endregion
//#region src/assets/chef.jpg
var chef_default = "/assets/chef-HRltRl4t.jpg";
//#endregion
//#region src/assets/fries.jpg
var fries_default = "/assets/fries-CxmKfl3A.jpg";
//#endregion
//#region src/assets/chicken.jpg
var chicken_default = "/assets/chicken-Mwcwvo7H.jpg";
//#endregion
//#region src/assets/menu-1.jpg
var menu_1_default = "/assets/menu-1-DWPvK5ey.jpg";
//#endregion
//#region src/assets/menu-2.jpg
var menu_2_default = "/assets/menu-2-28pQ9Jg-.jpg";
//#endregion
//#region src/assets/menu-3.jpg
var menu_3_default = "/assets/menu-3-Pw9ni5ZA.jpg";
//#endregion
//#region src/assets/feast-1.jpg
var feast_1_default = "/assets/feast-1-uLjIZosa.jpg";
//#endregion
//#region src/assets/web-garden2_1920px2.jpg
var web_garden2_1920px2_default = "/assets/web-garden2_1920px2-CVrxQrZ1.jpg";
//#endregion
//#region src/assets/feast-2.jpg
var feast_2_default = "/assets/feast-2-BZ1DKYKi.jpg";
//#endregion
//#region src/assets/feast-3.jpg
var feast_3_default = "/assets/feast-3-EVJY7Jb8.jpg";
//#endregion
//#region src/assets/stats-person.jpg
var stats_person_default = "/assets/stats-person-CYXaue6w.jpg";
//#endregion
//#region src/assets/kontaktslika.webp
var kontaktslika_default = "/assets/kontaktslika-D1kjPJO2.webp";
//#endregion
//#region src/assets/testi-1.jpg
var testi_1_default = "/assets/testi-1-DFzqBlU8.jpg";
//#endregion
//#region src/assets/testi-2.jpg
var testi_2_default = "/assets/testi-2-CgpT7BPu.jpg";
//#endregion
//#region src/assets/logo.jpg
var logo_default = "/assets/logo-BYDoUX3R.jpg";
//#endregion
//#region src/assets/sliced-paprika.png
var sliced_paprika_default = "/assets/sliced-paprika-Cv79PTSC.png";
//#endregion
//#region src/assets/001-1.png
var _001_1_default = "/assets/001-1-D36GKIu3.png";
//#endregion
//#region src/assets/004-1.png
var _004_1_default = "/assets/004-1-varA524G.png";
//#endregion
//#region src/assets/005.png
var _005_default = "/assets/005-CJufDMf9.png";
//#endregion
//#region src/lib/i18n/translations.ts
var localeLabels = {
	sr: "SR",
	en: "EN",
	de: "DE",
	ru: "RU",
	zh: "中文"
};
var menuCategoryKeys = [
	"breakfast",
	"coldStarters",
	"hotStarters",
	"buckwheatPizza",
	"soups",
	"pasta",
	"salads",
	"poultry",
	"vealPork",
	"grill",
	"fish",
	"desserts"
];
var translations = {
	sr: {
		meta: {
			title: "Restoran Garden - Tamo gdje su ukusi, tamo smo mi",
			description: "Autentičan restoran u Rogoušićima, 13 km od Sarajeva. Tradicionalna kuhinja iz krušne peći, bašta, dječije igralište i veliki parking."
		},
		nav: {
			home: "Početna",
			menu: "Meni",
			about: "O nama",
			gallery: "Galerija",
			contact: "Kontakt",
			cta: "Kontaktirajte nas"
		},
		hero: {
			titleLine1: "Stotine Ukusa pod",
			titleHighlight: "Jednim krovom",
			titleLine2: ", u jednoj basti",
			subtitle: "Tamo gdje su ukusi, tamo smo mi",
			ctaContact: "Kontaktirajte nas",
			ctaMenu: "Pogledajte meni",
			rating: "4.9 Google recenzija",
			awardsAndEducation: "Nagrade i edukacije"
		},
		about: {
			label: "naša priča",
			title: "Dobrodošli u Restoran Garden",
			p1: "Restoran ”Garden” smješten je u mjestu Rogoušići, uz glavni magistralni put, na samo 13 kilometara od srca Sarajeva i olimpijske ljepotice Jahorine. Udomljen u kotlini između dvije planine, u zelenilu i prirodnom ambijentu sa izvorskom vodom koja opija, restoran nudi kulinarske čarolije tradicionalnih jela i pruža pravo zadovoljstvo.",
			p2: "Trpeza ‘’Gardena’’ je autentična i bogata riznica nezaboravljenih domaćih ukusa pripremljenih iz krušne peći i sa mnogo ljubavi. Atmosfera kućne topline, bogat izbor vina i žestokih pića, ljubazno i profesionalno osoblje, dječije igralište, pristupačan prilaz objektu i veliki parking mami sve sladokusce i ljubitelje vrhunske gastronomije. Gastronomski biser ‘Garden’ je sjajno mjesto za rođendanska slavlja i druga okupljanja."
		},
		banner: {
			line1: "Napravljeno sa",
			passion: "Strašću",
			line2: "Servirano sa",
			love: "Ljubavlju"
		},
		menu: {
			label: "naš meni",
			title: "Kulinarska ponuda",
			hint: "Kliknite na kategoriju za opis ponude",
			categories: {
				breakfast: {
					title: "Doručak",
					desc: "Za doručak nudimo bogatu ponudu od raznih vrsta omleta do ukusne domaće pure sa kajmakom."
				},
				coldStarters: {
					title: "Hladna predjela",
					desc: "Selekcija suhomesnatih proizvoda sa sirevima."
				},
				hotStarters: {
					title: "Topla predjela",
					desc: "Razne vrste pogačica od heljde, pileći stapići, uštipci i palačinci od heljde."
				},
				buckwheatPizza: {
					title: "Heljdine pizze",
					desc: "Pravo iz naše krušne peći dolaze heljdine pizze različitih okusa — od klasične margarite do slatke pizze sa eurokremom i voćem."
				},
				soups: {
					title: "Supe i čorbe",
					desc: "Od lagane bistre supe do kremastih čorbi sa teletinom, povrćem i ribom."
				},
				pasta: {
					title: "Paste i rižota",
					desc: "Raznovrstan izbor pasti i rižota sa kontinentalnim i mediteranskim okusima."
				},
				salads: {
					title: "Obrok salate",
					desc: "Više vrsta bogatih obrok salata u kombinaciji sa biftekom, piletinom, pastrmkom, tunjevinom ili različitim vrstama povrća."
				},
				poultry: {
					title: "Piletina i ćuretina",
					desc: "Od punjene piletine do marinirane ćuretine servirane sa bogatim prilozima i sosovima."
				},
				vealPork: {
					title: "Teletina i svinjetina",
					desc: "Od telećih i svinjećih šnicli, različitih vrsta ramsteka i bifteka, pa do teletine ispod sača."
				},
				grill: {
					title: "Jela sa roštilja",
					desc: "Ćevapi, pljeskavice, kobasice, pileći file, svinjski vrat, vješalica i biftek."
				},
				fish: {
					title: "Riba",
					desc: "Širok asortiman ribljih specijaliteta u mediteranskom i kontinentalnom aranžmanu."
				},
				desserts: {
					title: "Poslastice",
					desc: "Razni domaći tradicionalni kolači, palačinci i razne vrste sladoleda."
				}
			}
		},
		gallery: {
			label: "galerija",
			title: "Ambijent i ukusi",
			subtitle: "Pogledajte atmosferu našeg restorana, bašte i jela pripremljenih s ljubavlju.",
			close: "Zatvori",
			prev: "Prethodna",
			next: "Sljedeća"
		},
		stats: {
			title: "Zašto gosti\nbiraju Garden",
			subtitle: "Porodični restoran otvoren 2018. godine, u prirodnom ambijentu Rogoušića — samo 13 km od Sarajeva.",
			items: [
				{
					value: "2018",
					label: "Godina otvaranja"
				},
				{
					value: "13 km",
					label: "Od Sarajeva"
				},
				{
					value: "100%",
					label: "Porodični restoran"
				}
			]
		},
		testimonials: {
			label: "utisci gostiju",
			title: "Šta kažu naši gosti",
			items: [
				{
					quote: "Predivan nov restoran. Ugodan enterijer, muzika, atmosfera, ljetna terasa i bašta... Dobra gastronomska ponuda i zanimljiva vinska karta.",
					name: "Jelena Camur",
					role: "Gost"
				},
				{
					quote: "Odlično mjesto za odmor, veoma prijatno osoblje. Porcije su velike, a cijene više nego pristupačne.",
					name: "Dragan Sender",
					role: "Gost"
				},
				{
					quote: "Sta za reći — dođeš, vidiš, vratiš se opet. Sve pohvale!!",
					name: "Jovana G.",
					role: "Gost"
				}
			]
		},
		features: {
			label: "istražite",
			title: "Naši sadržaji",
			tabs: {
				playground: "Dječije igralište",
				wineWorkshop: "Vinska radionica",
				fireplaceRoom: "Kamin sala",
				events: "Organizacija svečanosti"
			},
			playground: {
				title: "Kutak za najmlađe",
				desc: "Prostrano i sigurno dječije igralište gdje vaši mališani mogu uživati u igri na otvorenom."
			},
			wineWorkshop: {
				title: "Vinska radionica",
				desc: "Ekskluzivan prostor za ljubitelje vina, gdje organizujemo degustacije i prezentacije vrhunskih etiketa."
			},
			fireplaceRoom: {
				title: "Kamin sala za korporativne događaje",
				desc: "Topla i intimna atmosfera naše kamin sale idealna je za poslovne sastanke, korporativne događaje i manja okupljanja."
			},
			events: {
				title: "Organizacija svečanosti",
				desc: "Organizujemo sve vrste proslava i svečanosti za do 50 ljudi. Prepustite nama brigu o hrani i ambijentu.",
				videoLabel: "Video prezentacija"
			}
		},
		contact: {
			label: "kontakt",
			title: "Posjetite nas",
			subtitle: "Rezervacije i informacije — pozovite nas ili pišite putem društvenih mreža.",
			phone: "Telefon",
			address: "Adresa",
			email: "E-mail",
			instagram: "Instagram",
			hoursTitle: "Radno vrijeme",
			hoursWeek: "Utorak – Nedjelja: 09:00 – 22:00",
			hoursMonday: "Ponedjeljak: zatvoreno",
			callUs: "Pozovite nas"
		},
		footer: {
			label: "do vidjenja uskoro",
			title: "Tamo gdje su ukusi,\ntamo smo mi",
			hours: "Radno vrijeme",
			visit: "Adresa i kontakt",
			copyright: "Restoran Garden, Rogoušići. Sva prava zadržana."
		}
	},
	en: {
		meta: {
			title: "Restaurant Garden — Where flavours are, there we are",
			description: "Authentic restaurant in Rogoušići, 13 km from Sarajevo. Traditional oven cuisine, garden terrace, playground and large parking."
		},
		nav: {
			home: "Home",
			menu: "Menu",
			about: "About",
			gallery: "Gallery",
			contact: "Contact",
			cta: "Contact us"
		},
		hero: {
			titleLine1: "Prepared for",
			titleHighlight: "Food Lovers",
			titleLine2: "",
			subtitle: "Where flavours are, there we are",
			ctaContact: "Contact us",
			ctaMenu: "View menu",
			rating: "4.9 Google reviews",
			awardsAndEducation: "Awards & Education"
		},
		about: {
			label: "our story",
			title: "Welcome to Restaurant Garden",
			p1: "Restaurant Garden is located in Rogoušići, along the main road, just 13 kilometres from the heart of Sarajevo and the Olympic beauty of Jahorina. Nestled in a valley between two mountains, surrounded by greenery and natural ambience with spring water, the restaurant offers culinary magic of traditional dishes.",
			p2: "The Garden table is an authentic treasure trove of unforgettable home flavours from our bread oven, prepared with love. Home warmth, a rich selection of wines and spirits, friendly staff, a children's playground, accessible access and large parking attract all gourmets. A gastronomic pearl and a great place for birthdays and gatherings."
		},
		banner: {
			line1: "Made with",
			passion: "Passion",
			line2: "Served with",
			love: "Love"
		},
		menu: {
			label: "our menu",
			title: "Culinary offer",
			hint: "Click a category to read the description",
			categories: {
				breakfast: {
					title: "Breakfast",
					desc: "A rich selection from various omelettes to delicious homemade turkey with kaymak."
				},
				coldStarters: {
					title: "Cold starters",
					desc: "Selection of cured meats with cheeses."
				},
				hotStarters: {
					title: "Hot starters",
					desc: "Buckwheat flatbreads, chicken sticks, fritters and buckwheat pancakes."
				},
				buckwheatPizza: {
					title: "Buckwheat pizzas",
					desc: "From our bread oven — classic margarita to sweet pizza with Eurocrem and fruit."
				},
				soups: {
					title: "Soups & stews",
					desc: "From light clear soup to creamy stews with veal, vegetables and fish."
				},
				pasta: {
					title: "Pasta & risotto",
					desc: "A varied selection with continental and Mediterranean flavours."
				},
				salads: {
					title: "Meal salads",
					desc: "Rich salads with steak, chicken, trout, tuna or various vegetables."
				},
				poultry: {
					title: "Chicken & turkey",
					desc: "From stuffed chicken to marinated turkey with rich sides and sauces."
				},
				vealPork: {
					title: "Veal & pork",
					desc: "Veal and pork cutlets, various steaks and veal under the sač."
				},
				grill: {
					title: "Grill",
					desc: "Ćevapi, pljeskavica, sausages, chicken fillet, pork neck, vješalica and steak."
				},
				fish: {
					title: "Fish",
					desc: "Wide selection of fish specialties in Mediterranean and continental style."
				},
				desserts: {
					title: "Desserts",
					desc: "Traditional homemade cakes, pancakes and various ice creams."
				}
			}
		},
		gallery: {
			label: "gallery",
			title: "Ambience & flavours",
			subtitle: "Explore our restaurant, garden terrace and dishes prepared with love.",
			close: "Close",
			prev: "Previous",
			next: "Next"
		},
		stats: {
			title: "Why guests\nchoose Garden",
			subtitle: "Family restaurant opened in 2018, in the natural setting of Rogoušići — just 13 km from Sarajevo.",
			items: [
				{
					value: "2018",
					label: "Year opened"
				},
				{
					value: "13 km",
					label: "From Sarajevo"
				},
				{
					value: "100%",
					label: "Family owned"
				}
			]
		},
		testimonials: {
			label: "guest reviews",
			title: "What our guests say",
			items: [
				{
					quote: "Beautiful new restaurant. Pleasant interior, music, atmosphere, summer terrace and garden... Good gastronomic offer and interesting wine list.",
					name: "Jelena Camur",
					role: "Guest"
				},
				{
					quote: "Great place to relax, very friendly staff. Portions are huge and prices more than reasonable.",
					name: "Dragan Sender",
					role: "Guest"
				},
				{
					quote: "What can I say — you come, you see, you come back again. All praise!!",
					name: "Jovana G.",
					role: "Guest"
				}
			]
		},
		features: {
			label: "explore",
			title: "Our Facilities",
			tabs: {
				playground: "Playground",
				wineWorkshop: "Wine Workshop",
				fireplaceRoom: "Fireplace Room",
				events: "Event Organization"
			},
			playground: {
				title: "Kids Corner",
				desc: "Spacious and safe children's playground where your little ones can enjoy outdoor play."
			},
			wineWorkshop: {
				title: "Wine Workshop",
				desc: "An exclusive space for wine lovers, where we organize tastings and presentations of premium labels."
			},
			fireplaceRoom: {
				title: "Fireplace Room for Corporate Events",
				desc: "The warm and intimate atmosphere of our fireplace room is ideal for business meetings, corporate events, and smaller gatherings."
			},
			events: {
				title: "Event Organization",
				desc: "We organize all kinds of celebrations and events for up to 50 people. Leave the food and ambiance to us.",
				videoLabel: "Video Presentation"
			}
		},
		contact: {
			label: "contact",
			title: "Visit us",
			subtitle: "Reservations and info — call us or reach out on social media.",
			phone: "Phone",
			address: "Address",
			email: "Email",
			instagram: "Instagram",
			hoursTitle: "Opening hours",
			hoursWeek: "Tuesday – Sunday: 09:00 – 22:00",
			hoursMonday: "Monday: closed",
			callUs: "Call us"
		},
		footer: {
			label: "see you soon",
			title: "Where flavours are,\nthere we are",
			hours: "Opening hours",
			visit: "Address & contact",
			copyright: "Restaurant Garden, Rogoušići. All rights reserved."
		}
	},
	de: {
		meta: {
			title: "Restaurant Garden — Wo Geschmack ist, sind wir",
			description: "Authentisches Restaurant in Rogoušići, 13 km von Sarajevo. Traditionelle Ofenküche, Garten, Spielplatz und großer Parkplatz."
		},
		nav: {
			home: "Start",
			menu: "Speisekarte",
			about: "Über uns",
			gallery: "Galerie",
			contact: "Kontakt",
			cta: "Kontaktieren Sie uns"
		},
		hero: {
			titleLine1: "Zubereitet für",
			titleHighlight: "Feinschmecker",
			titleLine2: "",
			subtitle: "Wo Geschmack ist, sind wir",
			ctaContact: "Kontaktieren Sie uns",
			ctaMenu: "Speisekarte ansehen",
			rating: "4.9 Google-Bewertung",
			awardsAndEducation: "Auszeichnungen & Bildung"
		},
		about: {
			label: "unsere Geschichte",
			title: "Willkommen im Restaurant Garden",
			p1: "Das Restaurant Garden liegt in Rogoušići an der Hauptstraße, nur 13 Kilometer vom Herzen Sarajevos und der Olympiaschönheit Jahorina entfernt. Eingebettet in ein Tal zwischen zwei Bergen, umgeben von Grün und natürlicher Umgebung mit Quellwasser.",
			p2: "Der Garden-Tisch ist eine authentische Schatzkammer unvergesslicher Hausmannskost aus unserem Backofen. Wohlige Atmosphäre, reiche Weinauswahl, freundliches Personal, Kinderspielplatz und großer Parkplatz — ein gastronomisches Juwel für Feiern und Zusammenkünfte."
		},
		banner: {
			line1: "Gemacht mit",
			passion: "Leidenschaft",
			line2: "Serviert mit",
			love: "Liebe"
		},
		menu: {
			label: "unsere Speisekarte",
			title: "Kulinarisches Angebot",
			hint: "Kategorie anklicken für die Beschreibung",
			categories: {
				breakfast: {
					title: "Frühstück",
					desc: "Reiche Auswahl von verschiedenen Omeletts bis hin zu hausgemachtem Truthahn mit Kaymak."
				},
				coldStarters: {
					title: "Kalte Vorspeisen",
					desc: "Auswahl an Wurstwaren mit Käsesorten."
				},
				hotStarters: {
					title: "Warme Vorspeisen",
					desc: "Buchweizenfladen, Hähnchenstäbchen, Fritters und Buchweizenpfannkuchen."
				},
				buckwheatPizza: {
					title: "Buchweizenpizzen",
					desc: "Aus unserem Ofen — von klassischer Margarita bis zur süßen Pizza mit Eurocrem und Obst."
				},
				soups: {
					title: "Suppen & Eintöpfe",
					desc: "Von leichter klaren Suppe bis zu cremigen Eintöpfen mit Kalbfleisch, Gemüse und Fisch."
				},
				pasta: {
					title: "Pasta & Risotto",
					desc: "Vielfältige Auswahl mit kontinentalem und mediterranem Geschmack."
				},
				salads: {
					title: "Salatgerichte",
					desc: "Reiche Salate mit Steak, Hähnchen, Forelle, Thunfisch oder verschiedenem Gemüse."
				},
				poultry: {
					title: "Hähnchen & Truthahn",
					desc: "Vom gefüllten Hähnchen bis zum marinierten Truthahn mit reichhaltigen Beilagen."
				},
				vealPork: {
					title: "Kalb & Schwein",
					desc: "Kalbs- und Schweineschnitzel, verschiedene Steaks und Kalbfleisch unter dem Sač."
				},
				grill: {
					title: "Grillgerichte",
					desc: "Ćevapi, Pljeskavica, Würste, Hähnchenfilet, Schweinenacken, Vješalica und Steak."
				},
				fish: {
					title: "Fisch",
					desc: "Breites Angebot an Fischspezialitäten im mediterranen und kontinentalen Stil."
				},
				desserts: {
					title: "Desserts",
					desc: "Traditionelle hausgemachte Kuchen, Pfannkuchen und verschiedene Eiscremes."
				}
			}
		},
		gallery: {
			label: "galerie",
			title: "Ambiente & Genuss",
			subtitle: "Entdecken Sie unser Restaurant, die Gartenterrasse und unsere Gerichte.",
			close: "Schließen",
			prev: "Zurück",
			next: "Weiter"
		},
		stats: {
			title: "Warum Gäste\nGarden wählen",
			subtitle: "Familienrestaurant seit 2018 in der Natur von Rogoušići — nur 13 km von Sarajevo.",
			items: [
				{
					value: "2018",
					label: "Eröffnungsjahr"
				},
				{
					value: "13 km",
					label: "Von Sarajevo"
				},
				{
					value: "100%",
					label: "Familienbetrieb"
				}
			]
		},
		testimonials: {
			label: "Gästebewertungen",
			title: "Was unsere Gäste sagen",
			items: [
				{
					quote: "Wunderschönes neues Restaurant. Angenehmes Interieur, Musik, Atmosphäre, Sommerterrasse und Garten... Gutes gastronomisches Angebot.",
					name: "Jelena Camur",
					role: "Gast"
				},
				{
					quote: "Toller Ort zum Entspannen, sehr freundliches Personal. Große Portionen zu fairen Preisen.",
					name: "Dragan Sender",
					role: "Gast"
				},
				{
					quote: "Was soll man sagen — man kommt, sieht und kommt wieder. Alles Lob!!",
					name: "Jovana G.",
					role: "Gast"
				}
			]
		},
		features: {
			label: "entdecken",
			title: "Unsere Einrichtungen",
			tabs: {
				playground: "Spielplatz",
				wineWorkshop: "Wein-Workshop",
				fireplaceRoom: "Kaminzimmer",
				events: "Veranstaltungen"
			},
			playground: {
				title: "Kinderecke",
				desc: "Geräumiger und sicherer Kinderspielplatz, auf dem Ihre Kleinen draußen spielen können."
			},
			wineWorkshop: {
				title: "Wein-Workshop",
				desc: "Ein exklusiver Raum für Weinliebhaber, in dem wir Verkostungen und Präsentationen von Premium-Etiketten organisieren."
			},
			fireplaceRoom: {
				title: "Kaminzimmer für Firmenveranstaltungen",
				desc: "Die warme und intime Atmosphäre unseres Kaminzimmers ist ideal für Geschäftstreffen, Firmenveranstaltungen und kleinere Versammlungen."
			},
			events: {
				title: "Veranstaltungsorganisation",
				desc: "Wir organisieren alle Arten von Feiern und Veranstaltungen für bis zu 50 Personen. Überlassen Sie uns Essen und Ambiente.",
				videoLabel: "Videopräsentation"
			}
		},
		contact: {
			label: "kontakt",
			title: "Besuchen Sie uns",
			subtitle: "Reservierungen und Infos — rufen Sie uns an oder schreiben Sie uns.",
			phone: "Telefon",
			address: "Adresse",
			email: "E-Mail",
			instagram: "Instagram",
			hoursTitle: "Öffnungszeiten",
			hoursWeek: "Dienstag – Sonntag: 09:00 – 22:00",
			hoursMonday: "Montag: geschlossen",
			callUs: "Rufen Sie uns an"
		},
		footer: {
			label: "bis bald",
			title: "Wo Geschmack ist,\nsind wir",
			hours: "Öffnungszeiten",
			visit: "Adresse & Kontakt",
			copyright: "Restaurant Garden, Rogoušići. Alle Rechte vorbehalten."
		}
	},
	ru: {
		meta: {
			title: "Ресторан Garden — Там, где вкус, там и мы",
			description: "Аутентичный ресторан в Рогоушичах, 13 км от Сараево. Традиционная кухня из печи, сад, детская площадка и большая парковка."
		},
		nav: {
			home: "Главная",
			menu: "Меню",
			about: "О нас",
			gallery: "Галерея",
			contact: "Контакты",
			cta: "Связаться с нами"
		},
		hero: {
			titleLine1: "Приготовлено для",
			titleHighlight: "Любителей",
			titleLine2: "Еды",
			subtitle: "Там, где вкус, там и мы",
			ctaContact: "Связаться с нами",
			ctaMenu: "Посмотреть меню",
			rating: "4.9 Отзывы Google",
			awardsAndEducation: "Награды и образование"
		},
		about: {
			label: "наша история",
			title: "Добро пожаловать в Restaurant Garden",
			p1: "Ресторан Garden расположен в Рогоушичах, вдоль главной дороги, всего в 13 километрах от центра Сараево и олимпийской красавицы Яхорины. В долине между двумя горами, в зелени и природной атмосфере с родниковой водой.",
			p2: "Стол Garden — это аутентичное сокровище незабываемых домашних вкусов из нашей печи. Домашняя атмосфера, богатый выбор вин, дружелюбный персонал, детская площадка и большая парковка — гастрономическая жемчужина для праздников и встреч."
		},
		banner: {
			line1: "Приготовлено с",
			passion: "Страстью",
			line2: "Подано с",
			love: "Любовью"
		},
		menu: {
			label: "наше меню",
			title: "Кулинарное предложение",
			hint: "Нажмите на категорию для описания",
			categories: {
				breakfast: {
					title: "Завтрак",
					desc: "Богатый выбор от различных омлетов до домашней индейки с кайmak."
				},
				coldStarters: {
					title: "Холодные закуски",
					desc: "Ассортимент копчёностей с сырами."
				},
				hotStarters: {
					title: "Горячие закуски",
					desc: "Гречневые лепёшки, куриные палочки, оладьи и гречневые блины."
				},
				buckwheatPizza: {
					title: "Гречневые пиццы",
					desc: "Из нашей печи — от классической маргариты до сладкой пиццы с Eurocrem и фруктами."
				},
				soups: {
					title: "Супы и похлёбки",
					desc: "От лёгкого прозрачного супа до сливочных похлёбок с телятиной, овощами и рыбой."
				},
				pasta: {
					title: "Паста и ризотто",
					desc: "Разнообразный выбор с континентальными и средиземноморскими вкусами."
				},
				salads: {
					title: "Салаты",
					desc: "Сытные салаты со стейком, курицей, форелью, тунцом или овощами."
				},
				poultry: {
					title: "Курица и индейка",
					desc: "От фаршированной курицы до маринованной индейки с гарнирами и соусами."
				},
				vealPork: {
					title: "Телятина и свинина",
					desc: "Котлеты, стейки и телятина под sač."
				},
				grill: {
					title: "Блюда с гриля",
					desc: "Ћevapi, плескавица, колбаски, куриное филе, свиная шея, vješalica и стейк."
				},
				fish: {
					title: "Рыба",
					desc: "Широкий ассортимент рыбных блюд в средиземноморском и континентальном стиле."
				},
				desserts: {
					title: "Десерты",
					desc: "Традиционные домашние торты, блины и различное мороженое."
				}
			}
		},
		gallery: {
			label: "галерея",
			title: "Атмосфера и вкусы",
			subtitle: "Познакомьтесь с нашим рестораном, садом и блюдами, приготовленными с любовью.",
			close: "Закрыть",
			prev: "Назад",
			next: "Далее"
		},
		stats: {
			title: "Почему гости\nвыбирают Garden",
			subtitle: "Семейный ресторан с 2018 года в природной обстановке Рогоушич — всего 13 км от Сараево.",
			items: [
				{
					value: "2018",
					label: "Год открытия"
				},
				{
					value: "13 км",
					label: "От Сараево"
				},
				{
					value: "100%",
					label: "Семейный ресторан"
				}
			]
		},
		testimonials: {
			label: "отзывы гостей",
			title: "Что говорят наши гости",
			items: [
				{
					quote: "Прекрасный новый ресторан. Уютный интерьер, музыка, атмосфера, летняя терраса и сад... Отличное гастрономическое предложение.",
					name: "Jelena Camur",
					role: "Гость"
				},
				{
					quote: "Отличное место для отдыха, очень приятный персонал. Большие порции по доступным ценам.",
					name: "Dragan Sender",
					role: "Гость"
				},
				{
					quote: "Что сказать — приходишь, видишь, возвращаешься снова. Все похвалы!!",
					name: "Jovana G.",
					role: "Гость"
				}
			]
		},
		features: {
			label: "исследуйте",
			title: "Наши объекты",
			tabs: {
				playground: "Детская площадка",
				wineWorkshop: "Винная мастерская",
				fireplaceRoom: "Каминный зал",
				events: "Организация мероприятий"
			},
			playground: {
				title: "Детский уголок",
				desc: "Просторная и безопасная детская площадка, где ваши малыши могут наслаждаться играми на свежем воздухе."
			},
			wineWorkshop: {
				title: "Винная мастерская",
				desc: "Эксклюзивное пространство для любителей вина, где мы организуем дегустации и презентации премиальных марок."
			},
			fireplaceRoom: {
				title: "Каминный зал для корпоративных мероприятий",
				desc: "Теплая и интимная атмосфера нашего каминного зала идеально подходит для деловых встреч, корпоративных мероприятий и небольших собраний."
			},
			events: {
				title: "Организация мероприятий",
				desc: "Мы организуем все виды торжеств и мероприятий до 50 человек. Доверьте нам еду и атмосферу.",
				videoLabel: "Видеопрезентация"
			}
		},
		contact: {
			label: "контакты",
			title: "Посетите нас",
			subtitle: "Бронирование и информация — звоните или пишите в соцсетях.",
			phone: "Телефон",
			address: "Адрес",
			email: "E-mail",
			instagram: "Instagram",
			hoursTitle: "Часы работы",
			hoursWeek: "Вторник – Воскресенье: 09:00 – 22:00",
			hoursMonday: "Понедельник: выходной",
			callUs: "Позвоните нам"
		},
		footer: {
			label: "до скорой встречи",
			title: "Там, где вкус,\nтам и мы",
			hours: "Часы работы",
			visit: "Адрес и контакты",
			copyright: "Restaurant Garden, Rogoušići. Все права защищены."
		}
	},
	zh: {
		meta: {
			title: "Garden 餐厅 — 有美味的地方，就有我们",
			description: "位于 Rogoušići 的正宗餐厅，距萨拉热窝 13 公里。传统窑炉美食、花园露台、儿童游乐场和大型停车场。"
		},
		nav: {
			home: "首页",
			menu: "菜单",
			about: "关于我们",
			gallery: "图库",
			contact: "联系",
			cta: "联系我们"
		},
		hero: {
			titleLine1: "为",
			titleHighlight: "美食爱好者",
			titleLine2: "而准备",
			subtitle: "有美味的地方，就有我们",
			ctaContact: "联系我们",
			ctaMenu: "查看菜单",
			rating: "4.9 Google 评分",
			awardsAndEducation: "奖项与教育"
		},
		about: {
			label: "我们的故事",
			title: "欢迎来到 Garden 餐厅",
			p1: "Garden 餐厅位于 Rogoušići 主干道旁，距萨拉热窝市中心和 Jahorina 奥林匹亚胜地仅 13 公里。坐落于两山之间的山谷，绿树环绕，泉水清冽，提供传统美食的烹饪魅力。",
			p2: "Garden 的餐桌是源自窑炉的正宗家乡美味宝库。温馨氛围、丰富酒品、友好员工、儿童游乐场和大型停车场，是庆祝生日和聚会的理想之选。"
		},
		banner: {
			line1: "用心",
			passion: "烹饪",
			line2: "以",
			love: "爱心奉上"
		},
		menu: {
			label: "我们的菜单",
			title: "美食供应",
			hint: "点击类别查看描述",
			categories: {
				breakfast: {
					title: "早餐",
					desc: "从各种煎蛋卷到美味的自制火鸡配 kaymak，丰富选择。"
				},
				coldStarters: {
					title: "冷盘",
					desc: "精选熏制肉类与奶酪。"
				},
				hotStarters: {
					title: "热盘",
					desc: "荞麦饼、鸡肉条、炸点和荞麦薄饼。"
				},
				buckwheatPizza: {
					title: "荞麦披萨",
					desc: "来自我们的窑炉——从经典玛格丽特到 Eurocrem 水果甜披萨。"
				},
				soups: {
					title: "汤与炖菜",
					desc: "从清淡清汤到小牛肉、蔬菜和鱼类的浓汤。"
				},
				pasta: {
					title: "意面与意式烩饭",
					desc: "大陆与地中海风味的多样选择。"
				},
				salads: {
					title: "主菜沙拉",
					desc: "搭配牛排、鸡肉、鳟鱼、金枪鱼或各类蔬菜的丰富沙拉。"
				},
				poultry: {
					title: "鸡肉与火鸡",
					desc: "从填馅鸡肉到腌制火鸡，配丰富配菜和酱汁。"
				},
				vealPork: {
					title: "小牛肉与猪肉",
					desc: "小牛肉和猪排、各类牛排及 sač 小牛肉。"
				},
				grill: {
					title: "烧烤",
					desc: "ćevapi、pljeskavica、香肠、鸡 fillet、猪颈肉、vješalica 和牛排。"
				},
				fish: {
					title: "鱼类",
					desc: "地中海与大陆风格的丰富鱼类特色菜。"
				},
				desserts: {
					title: "甜点",
					desc: "传统自制蛋糕、薄饼和各类冰淇淋。"
				}
			}
		},
		gallery: {
			label: "图库",
			title: "环境与美味",
			subtitle: "浏览我们的餐厅、花园露台和用心烹制的美食。",
			close: "关闭",
			prev: "上一张",
			next: "下一张"
		},
		stats: {
			title: "客人为何\n选择 Garden",
			subtitle: "2018 年开业的家庭餐厅，位于 Rogoušići 自然环境中——距萨拉热窝仅 13 公里。",
			items: [
				{
					value: "2018",
					label: "开业年份"
				},
				{
					value: "13 km",
					label: "距萨拉热窝"
				},
				{
					value: "100%",
					label: "家庭经营"
				}
			]
		},
		testimonials: {
			label: "客人评价",
			title: "客人怎么说",
			items: [
				{
					quote: "漂亮的新餐厅。舒适的内饰、音乐、氛围、夏季露台和花园……优秀的美食供应和有趣的酒单。",
					name: "Jelena Camur",
					role: "客人"
				},
				{
					quote: "放松的好去处，员工非常友好。份量大，价格非常合理。",
					name: "Dragan Sender",
					role: "客人"
				},
				{
					quote: "怎么说呢——来了，看了，还会再来。全是赞美！！",
					name: "Jovana G.",
					role: "客人"
				}
			]
		},
		features: {
			label: "探索",
			title: "我们的设施",
			tabs: {
				playground: "游乐场",
				wineWorkshop: "葡萄酒工坊",
				fireplaceRoom: "壁炉室",
				events: "活动组织"
			},
			playground: {
				title: "儿童角",
				desc: "宽敞安全的儿童游乐场，让您的孩子尽情享受户外玩耍。"
			},
			wineWorkshop: {
				title: "葡萄酒工坊",
				desc: "专为葡萄酒爱好者打造的专属空间，我们在此举办高级品牌的品鉴和展示活动。"
			},
			fireplaceRoom: {
				title: "企业活动壁炉室",
				desc: "我们壁炉室温馨私密的氛围是商务会议、企业活动和小型聚会的理想选择。"
			},
			events: {
				title: "活动组织",
				desc: "我们为多达50人组织各种庆祝和活动。请将食物和氛围交给我们。",
				videoLabel: "视频展示"
			}
		},
		contact: {
			label: "联系",
			title: "欢迎光临",
			subtitle: "预订与咨询——请致电或通过社交媒体联系我们。",
			phone: "电话",
			address: "地址",
			email: "电子邮件",
			instagram: "Instagram",
			hoursTitle: "营业时间",
			hoursWeek: "周二至周日：09:00 – 22:00",
			hoursMonday: "周一：休息",
			callUs: "致电我们"
		},
		footer: {
			label: "期待再次相见",
			title: "有美味的地方，\n就有我们",
			hours: "营业时间",
			visit: "地址与联系",
			copyright: "Restaurant Garden, Rogoušići. 保留所有权利。"
		}
	}
};
//#endregion
//#region src/lib/i18n/LanguageProvider.tsx
var LanguageContext = createContext(null);
var STORAGE_KEY = "garden-locale";
function readStoredLocale() {
	if (typeof window === "undefined") return "sr";
	const stored = localStorage.getItem(STORAGE_KEY);
	if (stored && stored in translations) return stored;
	return "sr";
}
function LanguageProvider({ children }) {
	const [locale, setLocaleState] = useState("sr");
	useEffect(() => {
		setLocaleState(readStoredLocale());
	}, []);
	const setLocale = (next) => {
		setLocaleState(next);
		localStorage.setItem(STORAGE_KEY, next);
	};
	useEffect(() => {
		document.documentElement.lang = locale === "zh" ? "zh-CN" : locale;
	}, [locale]);
	return /* @__PURE__ */ jsx(LanguageContext.Provider, {
		value: {
			locale,
			setLocale,
			t: translations[locale]
		},
		children
	});
}
function useLanguage() {
	const ctx = useContext(LanguageContext);
	if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
	return ctx;
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var PHONE = "+38766319953";
var PHONE_DISPLAY = "+387 (0)66 319 953";
var ADDRESS = "Rogoušići bb, Pale";
var EMAIL = "restorangarden@yahoo.com";
var INSTAGRAM = "https://www.instagram.com/restaurantgarden2018/";
var FACEBOOK = "https://www.facebook.com/restaurantgarden2018";
var categoryImages = {
	breakfast: menu_1_default,
	coldStarters: menu_2_default,
	hotStarters: menu_3_default,
	buckwheatPizza: feast_1_default,
	soups: feast_2_default,
	pasta: feast_3_default,
	salads: chef_default,
	poultry: chicken_default,
	vealPork: fries_default,
	grill: menu_1_default,
	fish: menu_2_default,
	desserts: menu_3_default
};
var galleryImages = Object.values(/* @__PURE__ */ Object.assign({
	"/src/assets/galerija-nova/IMG_4802.JPG": IMG_4802_exports,
	"/src/assets/galerija-nova/IMG_4814.JPG": IMG_4814_exports,
	"/src/assets/galerija-nova/IMG_4815.JPG": IMG_4815_exports,
	"/src/assets/galerija-nova/IMG_4816.JPG": IMG_4816_exports,
	"/src/assets/galerija-nova/IMG_4817.JPG": IMG_4817_exports,
	"/src/assets/galerija-nova/IMG_4818.JPG": IMG_4818_exports,
	"/src/assets/galerija-nova/IMG_4819.JPG": IMG_4819_exports,
	"/src/assets/galerija-nova/IMG_4820.JPG": IMG_4820_exports,
	"/src/assets/galerija-nova/IMG_4821.JPG": IMG_4821_exports,
	"/src/assets/galerija-nova/IMG_4822.JPG": IMG_4822_exports,
	"/src/assets/galerija-nova/IMG_4823.JPG": IMG_4823_exports,
	"/src/assets/galerija-nova/IMG_4824.JPG": IMG_4824_exports,
	"/src/assets/galerija-nova/IMG_4825.JPG": IMG_4825_exports,
	"/src/assets/galerija-nova/IMG_4826.JPG": IMG_4826_exports,
	"/src/assets/galerija-nova/IMG_4827.JPG": IMG_4827_exports,
	"/src/assets/galerija-nova/IMG_4828.JPG": IMG_4828_exports,
	"/src/assets/galerija-nova/IMG_4829.JPG": IMG_4829_exports,
	"/src/assets/galerija-nova/IMG_4830.JPG": IMG_4830_exports,
	"/src/assets/galerija-nova/IMG_4831.JPG": IMG_4831_exports,
	"/src/assets/galerija-nova/IMG_4832.JPG": IMG_4832_exports,
	"/src/assets/galerija-nova/IMG_4833.JPG": IMG_4833_exports,
	"/src/assets/galerija-nova/IMG_4834.JPG": IMG_4834_exports,
	"/src/assets/galerija-nova/IMG_4835.JPG": IMG_4835_exports,
	"/src/assets/galerija-nova/IMG_4836.JPG": IMG_4836_exports,
	"/src/assets/galerija-nova/IMG_4837.JPG": IMG_4837_exports,
	"/src/assets/galerija-nova/IMG_4838.JPG": IMG_4838_exports,
	"/src/assets/galerija-nova/IMG_4839.JPG": IMG_4839_exports,
	"/src/assets/galerija-nova/IMG_4840.JPG": IMG_4840_exports,
	"/src/assets/galerija-nova/IMG_4841.JPG": IMG_4841_exports,
	"/src/assets/galerija-nova/IMG_4842.JPG": IMG_4842_exports,
	"/src/assets/galerija-nova/IMG_4843.JPG": IMG_4843_exports,
	"/src/assets/galerija-nova/IMG_4844.JPG": IMG_4844_exports,
	"/src/assets/galerija-nova/IMG_4845.JPG": IMG_4845_exports,
	"/src/assets/galerija-nova/IMG_4846.JPG": IMG_4846_exports,
	"/src/assets/galerija-nova/IMG_4847.JPG": IMG_4847_exports,
	"/src/assets/galerija-nova/IMG_4848.JPG": IMG_4848_exports,
	"/src/assets/galerija-nova/IMG_4849.JPG": IMG_4849_exports,
	"/src/assets/galerija-nova/IMG_4850.JPG": IMG_4850_exports,
	"/src/assets/galerija-nova/IMG_4851.JPG": IMG_4851_exports,
	"/src/assets/galerija-nova/IMG_4852.JPG": IMG_4852_exports,
	"/src/assets/galerija-nova/IMG_4853.JPG": IMG_4853_exports,
	"/src/assets/galerija-nova/IMG_4854.JPG": IMG_4854_exports,
	"/src/assets/galerija-nova/IMG_4855.JPG": IMG_4855_exports,
	"/src/assets/galerija-nova/IMG_4856.JPG": IMG_4856_exports,
	"/src/assets/galerija-nova/IMG_4857.JPG": IMG_4857_exports,
	"/src/assets/galerija-nova/IMG_4858.JPG": IMG_4858_exports,
	"/src/assets/galerija-nova/IMG_4859.JPG": IMG_4859_exports,
	"/src/assets/galerija-nova/IMG_4860.JPG": IMG_4860_exports,
	"/src/assets/galerija-nova/IMG_4861.JPG": IMG_4861_exports,
	"/src/assets/galerija-nova/IMG_4862.JPG": IMG_4862_exports,
	"/src/assets/galerija-nova/IMG_4863.JPG": IMG_4863_exports,
	"/src/assets/galerija-nova/IMG_4864.JPG": IMG_4864_exports,
	"/src/assets/galerija-nova/IMG_4865.JPG": IMG_4865_exports,
	"/src/assets/galerija-nova/IMG_4866.JPG": IMG_4866_exports,
	"/src/assets/galerija-nova/IMG_4867.JPG": IMG_4867_exports,
	"/src/assets/galerija-nova/IMG_4868.JPG": IMG_4868_exports,
	"/src/assets/galerija-nova/IMG_4869.JPG": IMG_4869_exports,
	"/src/assets/galerija-nova/IMG_4870.JPG": IMG_4870_exports,
	"/src/assets/galerija-nova/IMG_4871.JPG": IMG_4871_exports,
	"/src/assets/galerija-nova/IMG_4872.JPG": IMG_4872_exports,
	"/src/assets/galerija-nova/IMG_4873.JPG": IMG_4873_exports,
	"/src/assets/galerija-nova/IMG_4875.JPG": IMG_4875_exports,
	"/src/assets/galerija-nova/IMG_4876.JPG": IMG_4876_exports,
	"/src/assets/galerija-nova/IMG_4877.JPG": IMG_4877_exports,
	"/src/assets/galerija-nova/IMG_4878.JPG": IMG_4878_exports,
	"/src/assets/galerija-nova/IMG_4879.JPG": IMG_4879_exports,
	"/src/assets/galerija-nova/IMG_4880.JPG": IMG_4880_exports,
	"/src/assets/galerija-nova/IMG_4881.JPG": IMG_4881_exports,
	"/src/assets/galerija-nova/IMG_4882.JPG": IMG_4882_exports,
	"/src/assets/galerija-nova/IMG_4883.JPG": IMG_4883_exports,
	"/src/assets/galerija-nova/IMG_4884.JPG": IMG_4884_exports,
	"/src/assets/galerija-nova/IMG_4885.JPG": IMG_4885_exports,
	"/src/assets/galerija-nova/IMG_4886.JPG": IMG_4886_exports,
	"/src/assets/galerija-nova/IMG_4887.JPG": IMG_4887_exports,
	"/src/assets/galerija-nova/IMG_4888.JPG": IMG_4888_exports,
	"/src/assets/galerija-nova/IMG_4889.JPG": IMG_4889_exports,
	"/src/assets/galerija-nova/IMG_4890.JPG": IMG_4890_exports,
	"/src/assets/galerija-nova/IMG_4891.JPG": IMG_4891_exports,
	"/src/assets/galerija-nova/IMG_4892.JPG": IMG_4892_exports,
	"/src/assets/galerija-nova/IMG_4893.JPG": IMG_4893_exports,
	"/src/assets/galerija-nova/IMG_4894.JPG": IMG_4894_exports,
	"/src/assets/galerija-nova/IMG_4895.JPG": IMG_4895_exports,
	"/src/assets/galerija-nova/IMG_4896.JPG": IMG_4896_exports,
	"/src/assets/galerija-nova/IMG_4897.JPG": IMG_4897_exports,
	"/src/assets/galerija-nova/IMG_4898.JPG": IMG_4898_exports,
	"/src/assets/galerija-nova/IMG_4899.JPG": IMG_4899_exports,
	"/src/assets/galerija-nova/IMG_4900.JPG": IMG_4900_exports,
	"/src/assets/galerija-nova/IMG_4901.JPG": IMG_4901_exports,
	"/src/assets/galerija-nova/IMG_4902.JPG": IMG_4902_exports,
	"/src/assets/galerija-nova/certifikat.JPG": certifikat_exports
})).map((mod) => ({
	src: mod.default,
	alt: "Restoran Garden — galerija"
}));
var wineWorkshopImages = Object.values(/* @__PURE__ */ Object.assign({
	"/src/assets/vinska-radionica/vinska-radionica-1.JPG": vinska_radionica_1_exports,
	"/src/assets/vinska-radionica/vinska-radionica-10.JPG": vinska_radionica_10_exports,
	"/src/assets/vinska-radionica/vinska-radionica-2.JPG": vinska_radionica_2_exports,
	"/src/assets/vinska-radionica/vinska-radionica-3.JPG": vinska_radionica_3_exports,
	"/src/assets/vinska-radionica/vinska-radionica-4.JPG": vinska_radionica_4_exports,
	"/src/assets/vinska-radionica/vinska-radionica-5.JPG": vinska_radionica_5_exports,
	"/src/assets/vinska-radionica/vinska-radionica-6.JPG": vinska_radionica_6_exports,
	"/src/assets/vinska-radionica/vinska-radionica-7.JPG": vinska_radionica_7_exports,
	"/src/assets/vinska-radionica/vinska-radionica-8.JPG": vinska_radionica_8_exports,
	"/src/assets/vinska-radionica/vinska-radionica-9.JPG": vinska_radionica_9_exports
})).map((m) => m.default);
var bentoPattern = [
	"col-span-2 row-span-2",
	"col-span-1 row-span-1",
	"col-span-1 row-span-2",
	"col-span-1 row-span-1",
	"col-span-2 row-span-1",
	"col-span-1 row-span-1",
	"col-span-1 row-span-1"
];
var fadeUp = {
	initial: {
		opacity: 0,
		y: 40
	},
	whileInView: {
		opacity: 1,
		y: 0
	},
	viewport: {
		once: true,
		margin: "-80px"
	},
	transition: {
		duration: .7,
		ease: [
			.22,
			1,
			.36,
			1
		]
	}
};
function LanguageSwitcher() {
	const { locale, setLocale } = useLanguage();
	return /* @__PURE__ */ jsx("div", {
		className: "flex items-center gap-1 rounded-full bg-cream/10 p-1",
		children: Object.keys(localeLabels).map((code) => /* @__PURE__ */ jsx("button", {
			type: "button",
			onClick: () => setLocale(code),
			className: `rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${locale === code ? "bg-sunshine text-ink" : "text-cream/80 hover:text-cream"}`,
			"aria-label": localeLabels[code],
			children: localeLabels[code]
		}, code))
	});
}
function Nav() {
	const { t } = useLanguage();
	const [open, setOpen] = useState(false);
	const links = [
		{
			label: t.nav.home,
			id: "home"
		},
		{
			label: t.nav.menu,
			id: "menu"
		},
		{
			label: t.nav.about,
			id: "about"
		},
		{
			label: t.nav.gallery,
			id: "gallery"
		},
		{
			label: t.nav.contact,
			id: "contact"
		}
	];
	return /* @__PURE__ */ jsxs("header", {
		className: "fixed top-0 inset-x-0 z-50 px-4 pt-4",
		children: [/* @__PURE__ */ jsxs("nav", {
			className: "mx-auto max-w-6xl flex items-center justify-between gap-3 rounded-full bg-forest/85 backdrop-blur-md px-5 py-3 text-cream border border-white/10 shadow-lg shadow-forest-deep/20",
			children: [
				/* @__PURE__ */ jsxs("a", {
					href: "#home",
					className: "flex items-center gap-2 font-display text-xl shrink-0",
					children: [/* @__PURE__ */ jsx("span", {
						className: "grid place-items-center size-8 rounded-full bg-sunshine text-ink",
						children: /* @__PURE__ */ jsx("img", {
							src: logo_default,
							alt: "",
							className: "w-full h-full rounded-full"
						})
					}), "Restoran Garden"]
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "hidden lg:flex items-center gap-6 text-sm font-medium",
					children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						href: `#${l.id}`,
						className: "hover:text-sunshine transition-colors",
						children: l.label
					}) }, l.id))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "hidden md:flex items-center gap-3",
					children: [/* @__PURE__ */ jsx(LanguageSwitcher, {}), /* @__PURE__ */ jsx("a", {
						href: "#contact",
						className: "inline-flex items-center gap-1.5 rounded-full bg-sunshine text-ink px-4 py-2 text-sm font-semibold hover:bg-leaf transition-colors whitespace-nowrap",
						children: t.nav.cta
					})]
				}),
				/* @__PURE__ */ jsx("button", {
					onClick: () => setOpen(!open),
					className: "md:hidden p-2",
					"aria-label": "Menu",
					children: /* @__PURE__ */ jsx(Menu, { className: "size-5" })
				})
			]
		}), open && /* @__PURE__ */ jsxs("div", {
			className: "md:hidden mx-auto max-w-6xl mt-2 rounded-2xl bg-forest text-cream p-4 flex flex-col gap-3",
			children: [
				links.map((l) => /* @__PURE__ */ jsx("a", {
					href: `#${l.id}`,
					onClick: () => setOpen(false),
					className: "py-2",
					children: l.label
				}, l.id)),
				/* @__PURE__ */ jsx(LanguageSwitcher, {}),
				/* @__PURE__ */ jsx("a", {
					href: "#contact",
					onClick: () => setOpen(false),
					className: "rounded-full bg-sunshine text-ink px-4 py-2 text-center font-semibold",
					children: t.nav.cta
				})
			]
		})]
	});
}
function Hero() {
	const { t } = useLanguage();
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const yImg = useTransform(scrollYProgress, [0, 1], [0, 100]);
	const yText = useTransform(scrollYProgress, [0, 1], [0, -50]);
	return /* @__PURE__ */ jsxs("section", {
		ref,
		id: "home",
		className: "relative bg-forest text-cream overflow-hidden bg-cover bg-center pb-60",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: web_garden2_1920px2_default,
				alt: "",
				className: "absolute inset-0 w-full h-full object-cover object-center"
			}),
			/* @__PURE__ */ jsx("div", { className: "w-full h-full absolute z-5 bg-linear-to-t from-cream  to-transparent" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10",
				children: [
					/* @__PURE__ */ jsx(motion.div, {
						animate: {
							y: [
								0,
								-20,
								0
							],
							rotate: [
								0,
								8,
								0
							]
						},
						transition: {
							duration: 6,
							repeat: Infinity,
							ease: "easeInOut"
						},
						className: "absolute left-[8%] top-[30%] size-16 rounded-full bg-orange-zest hidden md:block"
					}),
					/* @__PURE__ */ jsx(motion.div, {
						animate: { y: [
							0,
							18,
							0
						] },
						transition: {
							duration: 5,
							repeat: Infinity,
							ease: "easeInOut"
						},
						className: "absolute right-[12%] top-[20%] size-24 rounded-full bg-sunshine/40 blur-sm hidden md:block"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "max-w-7xl mx-auto px-4 grid lg:grid-cols-2 items-end gap-8 h-full relative",
						children: [/* @__PURE__ */ jsxs(motion.div, {
							style: { y: yText },
							className: "relative z-10",
							children: [
								/* @__PURE__ */ jsxs(motion.h1, {
									initial: {
										opacity: 0,
										y: 30
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: {
										duration: .9,
										ease: [
											.22,
											1,
											.36,
											1
										]
									},
									className: "text-display text-forest mt-5 text-[clamp(1rem,6vw,4.5rem)]",
									children: [
										t.hero.titleLine1,
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "italic text-sunshine",
											children: t.hero.titleHighlight
										}),
										t.hero.titleLine2 && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsxs("span", {
											className: "relative inline-block",
											children: [t.hero.titleLine2, /* @__PURE__ */ jsx("svg", {
												viewBox: "0 0 200 20",
												className: "absolute -bottom-3 left-0 w-full h-3 text-orange-zest",
												fill: "none",
												children: /* @__PURE__ */ jsx("path", {
													d: "M2 14 Q 50 2 100 10 T 198 8",
													stroke: "currentColor",
													strokeWidth: "4",
													strokeLinecap: "round"
												})
											})]
										})] })
									]
								}),
								/* @__PURE__ */ jsx(motion.p, {
									initial: { opacity: 0 },
									animate: { opacity: 1 },
									transition: { delay: .4 },
									className: "mt-6 max-w-md text-forest/80 text-lg",
									children: t.hero.subtitle
								}),
								/* @__PURE__ */ jsxs(motion.div, {
									initial: {
										opacity: 0,
										y: 20
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: { delay: .6 },
									className: "mt-8 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ jsxs("a", {
										href: "#contact",
										className: "group inline-flex items-center gap-2 rounded-full bg-sunshine text-ink px-6 py-3.5 font-semibold hover:bg-leaf transition-colors",
										children: [t.hero.ctaContact, /* @__PURE__ */ jsx(ArrowRight, { className: "size-4 group-hover:translate-x-1 transition-transform" })]
									}), /* @__PURE__ */ jsx("a", {
										href: "#menu",
										className: "inline-flex items-center gap-2 rounded-full border border-forest/20 text-forest px-6 py-3.5 font-medium hover:bg-forest/5 transition-colors",
										children: t.hero.ctaMenu
									})]
								})
							]
						}), /* @__PURE__ */ jsxs(motion.div, {
							style: { y: yImg },
							className: "relative h-[500px] lg:h-[620px]",
							children: [
								/* @__PURE__ */ jsx(motion.div, {
									initial: {
										opacity: 0,
										scale: .9
									},
									animate: {
										opacity: 1,
										scale: 1
									},
									transition: {
										duration: 1,
										ease: "easeOut"
									},
									className: "absolute inset-0 flex justify-center items-end",
									children: /* @__PURE__ */ jsx("img", {
										src: andjelagaco_default,
										alt: "Restoran Garden",
										width: 896,
										height: 1152,
										className: "h-full w-auto object-contain drop-shadow-2xl"
									})
								}),
								/* @__PURE__ */ jsxs(motion.div, {
									animate: { y: [
										0,
										14,
										0
									] },
									transition: {
										duration: 5,
										repeat: Infinity,
										ease: "easeInOut",
										delay: .5
									},
									className: "absolute bottom-4 -right-2 md:right-4 bg-cream text-ink rounded-2xl p-3 shadow-xl",
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex items-center gap-1 text-orange-zest",
										children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "size-3.5 fill-current" }, i))
									}), /* @__PURE__ */ jsx("p", {
										className: "text-xs mt-1 font-medium",
										children: t.hero.rating
									})]
								}),
								/* @__PURE__ */ jsxs(motion.div, {
									animate: { y: [
										0,
										-10,
										0
									] },
									transition: {
										duration: 6,
										repeat: Infinity,
										ease: "easeInOut",
										delay: 1
									},
									className: "absolute bottom-24 -left-4 md:-left-8 bg-cream text-ink rounded-2xl p-3 shadow-xl max-w-[160px]",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 text-sunshine",
										children: [/* @__PURE__ */ jsx(Award, { className: "size-5 fill-current" }), /* @__PURE__ */ jsx(GraduationCap, { className: "size-5" })]
									}), /* @__PURE__ */ jsx("p", {
										className: "text-xs mt-1 font-semibold",
										children: t.hero.awardsAndEducation
									})]
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx("svg", {
				viewBox: "0 0 1440 120",
				className: "absolute bottom-0 left-0 w-full text-cream",
				preserveAspectRatio: "none",
				children: /* @__PURE__ */ jsx("path", {
					fill: "currentColor",
					d: "M0,80 C360,140 1080,0 1440,60 L1440,120 L0,120 Z"
				})
			})
		]
	});
}
function BrandStory() {
	const { t } = useLanguage();
	return /* @__PURE__ */ jsx("section", {
		id: "about",
		className: "bg-cream py-24 md:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-6xl mx-auto px-4 text-center",
			children: [
				/* @__PURE__ */ jsx(motion.p, {
					...fadeUp,
					className: "text-script text-3xl text-orange-zest",
					children: t.about.label
				}),
				/* @__PURE__ */ jsx(motion.h2, {
					...fadeUp,
					className: "text-display text-[clamp(2.25rem,5vw,4rem)] mt-2 text-forest",
					children: t.about.title
				}),
				/* @__PURE__ */ jsxs(motion.p, {
					...fadeUp,
					className: "max-w-screen-xl mx-auto mt-6 text-muted-foreground",
					children: [
						t.about.p1,
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("br", {}),
						t.about.p2
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-3 gap-3 md:gap-6 mt-14 items-end",
					children: [
						/* @__PURE__ */ jsx(motion.img, {
							...fadeUp,
							src: fries_default,
							alt: "",
							loading: "lazy",
							className: "aspect-square w-full object-cover rounded-3xl shadow-lg"
						}),
						/* @__PURE__ */ jsx(motion.img, {
							...fadeUp,
							transition: {
								duration: .7,
								delay: .15
							},
							src: chef_default,
							alt: "",
							loading: "lazy",
							className: "aspect-[4/5] w-full object-cover rounded-3xl shadow-2xl -translate-y-6"
						}),
						/* @__PURE__ */ jsx(motion.img, {
							...fadeUp,
							transition: {
								duration: .7,
								delay: .3
							},
							src: chicken_default,
							alt: "",
							loading: "lazy",
							className: "aspect-square w-full object-cover rounded-3xl shadow-lg"
						})
					]
				})
			]
		})
	});
}
function Banner() {
	const { t } = useLanguage();
	return /* @__PURE__ */ jsxs("section", {
		className: "bg-cream text-cream py-20 md:py-28 relative overflow-hidden",
		children: [
			/* @__PURE__ */ jsx(ChefHat, { className: "absolute left-[8%] top-1/2 -translate-y-1/2 size-20 opacity-30 -rotate-12 hidden md:block" }),
			/* @__PURE__ */ jsx(Utensils, { className: "absolute right-[10%] top-[20%] size-14 opacity-30 rotate-12 hidden md:block" }),
			/* @__PURE__ */ jsx(Coffee, { className: "absolute right-[6%] bottom-[18%] size-16 opacity-30 hidden md:block" }),
			/* @__PURE__ */ jsxs(motion.h2, {
				...fadeUp,
				className: "text-display text-center text-forest text-[clamp(2.5rem,7vw,5.5rem)] max-w-5xl mx-auto px-4",
				children: [
					t.banner.line1,
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "italic",
						children: t.banner.passion
					}),
					",",
					/* @__PURE__ */ jsx("br", {}),
					t.banner.line2,
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "text-sunshine",
						children: t.banner.love
					})
				]
			})
		]
	});
}
function MenuSection() {
	const { t } = useLanguage();
	const [active, setActive] = useState(menuCategoryKeys[0]);
	const activeCategory = t.menu.categories[active];
	return /* @__PURE__ */ jsx("section", {
		id: "menu",
		className: "bg-forest text-cream py-24 md:py-32 relative",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-6xl mx-auto px-4",
			children: [
				/* @__PURE__ */ jsx(motion.p, {
					...fadeUp,
					className: "text-script text-3xl text-sunshine text-center",
					children: t.menu.label
				}),
				/* @__PURE__ */ jsx(motion.h2, {
					...fadeUp,
					className: "text-display text-center text-[clamp(2.25rem,5vw,4rem)] mt-2",
					children: t.menu.title
				}),
				/* @__PURE__ */ jsx(motion.p, {
					...fadeUp,
					className: "text-center text-cream/70 mt-4 text-sm",
					children: t.menu.hint
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
					children: menuCategoryKeys.map((key, i) => {
						const cat = t.menu.categories[key];
						const isActive = active === key;
						return /* @__PURE__ */ jsx(motion.button, {
							type: "button",
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: { delay: i * .04 },
							onClick: () => setActive(key),
							className: `text-left rounded-3xl overflow-hidden border transition-all ${isActive ? "border-sunshine ring-2 ring-sunshine/40 scale-[1.02]" : "border-cream/10 hover:border-cream/30"}`,
							children: /* @__PURE__ */ jsxs("div", {
								className: "relative aspect-[4/3] overflow-hidden",
								children: [
									/* @__PURE__ */ jsx("img", {
										src: categoryImages[key],
										alt: cat.title,
										loading: "lazy",
										className: "w-full h-full object-cover"
									}),
									/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent" }),
									/* @__PURE__ */ jsx("h3", {
										className: "absolute bottom-0 left-0 right-0 p-4 font-display text-lg",
										children: cat.title
									})
								]
							})
						}, key);
					})
				}),
				/* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 16
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .35 },
					className: "mt-10 max-w-3xl mx-auto rounded-3xl bg-cream/10 border border-cream/15 p-8 text-center",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "font-display text-2xl text-sunshine",
						children: activeCategory.title
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-3 text-cream/85 leading-relaxed",
						children: activeCategory.desc
					})]
				}, active)
			]
		})
	});
}
function FeaturesTabs() {
	const { t } = useLanguage();
	const [activeTab, setActiveTab] = useState("playground");
	const f = t.features;
	const tabs = [
		{
			id: "playground",
			label: f.tabs.playground,
			icon: Tent
		},
		{
			id: "wineWorkshop",
			label: f.tabs.wineWorkshop,
			icon: Wine
		},
		{
			id: "fireplaceRoom",
			label: f.tabs.fireplaceRoom,
			icon: Flame
		},
		{
			id: "events",
			label: f.tabs.events,
			icon: Users
		}
	];
	const activeData = f[activeTab];
	const tabImages = activeTab === "wineWorkshop" ? wineWorkshopImages : galleryImages.slice(activeTab === "playground" ? 0 : activeTab === "fireplaceRoom" ? 6 : 12, activeTab === "playground" ? 6 : activeTab === "fireplaceRoom" ? 12 : 18).map((img) => img.src);
	const heroImage = tabImages[0];
	const gridImages = tabImages.slice(1, 5);
	return /* @__PURE__ */ jsxs("section", {
		id: "features",
		className: "bg-cream py-24 md:py-32 relative overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-white/0 via-forest/3 to-white/0 pointer-events-none" }), /* @__PURE__ */ jsxs("div", {
			className: "max-w-6xl mx-auto px-4 relative",
			children: [
				/* @__PURE__ */ jsx(motion.p, {
					...fadeUp,
					className: "text-script text-3xl text-orange-zest text-center",
					children: f.label
				}),
				/* @__PURE__ */ jsx(motion.h2, {
					...fadeUp,
					className: "text-display text-center text-[clamp(2.25rem,5vw,4rem)] mt-2 text-forest",
					children: f.title
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-10 flex flex-wrap justify-center gap-3",
					children: tabs.map((tab) => {
						const Icon = tab.icon;
						return /* @__PURE__ */ jsxs("button", {
							type: "button",
							onClick: () => setActiveTab(tab.id),
							className: `flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all duration-300 border ${activeTab === tab.id ? "bg-forest text-cream border-forest shadow-lg scale-105" : "bg-white text-forest/70 border-forest/15 hover:border-forest/40 hover:bg-forest/5"}`,
							children: [/* @__PURE__ */ jsx(Icon, { className: "size-4" }), tab.label]
						}, tab.id);
					})
				}),
				/* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 24
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .45 },
					className: "mt-12 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "space-y-5 lg:sticky lg:top-32",
						children: [
							heroImage && /* @__PURE__ */ jsx("div", {
								className: "aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl",
								children: /* @__PURE__ */ jsx("img", {
									src: heroImage,
									alt: activeData.title,
									className: "w-full h-full object-cover",
									loading: "lazy"
								})
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "text-display text-2xl md:text-3xl text-forest mt-6",
								children: activeData.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-base md:text-lg text-forest/75 leading-relaxed",
								children: activeData.desc
							}),
							activeTab === "events" && /* @__PURE__ */ jsx("div", {
								className: "relative aspect-video bg-forest/8 rounded-2xl overflow-hidden flex items-center justify-center border-2 border-dashed border-forest/25 mt-4",
								children: /* @__PURE__ */ jsxs("div", {
									className: "text-center space-y-2",
									children: [/* @__PURE__ */ jsx(PlayCircle, { className: "size-14 text-forest/35 mx-auto" }), /* @__PURE__ */ jsx("p", {
										className: "text-forest/50 font-medium text-sm",
										children: f.events.videoLabel
									})]
								})
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-2 gap-3",
						children: gridImages.length > 0 ? gridImages.map((src, idx) => /* @__PURE__ */ jsx("div", {
							className: `overflow-hidden rounded-2xl shadow-md ${idx === 0 ? "col-span-2" : ""}`,
							children: /* @__PURE__ */ jsx("img", {
								src,
								alt: "",
								loading: "lazy",
								className: `w-full object-cover hover:scale-105 transition-transform duration-500 ${idx === 0 ? "h-56" : "h-40"}`
							})
						}, idx)) : Array.from({ length: 4 }).map((_, idx) => /* @__PURE__ */ jsx("div", {
							className: `overflow-hidden rounded-2xl bg-forest/8 border-2 border-dashed border-forest/20 flex items-center justify-center ${idx === 0 ? "col-span-2 h-56" : "h-40"}`,
							children: /* @__PURE__ */ jsx("p", {
								className: "text-forest/30 text-sm font-medium",
								children: "Galerija"
							})
						}, idx))
					})]
				}, activeTab)
			]
		})]
	});
}
function GalleryLightbox({ index, onClose, onPrev, onNext }) {
	const { t } = useLanguage();
	const image = galleryImages[index];
	useEffect(() => {
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
			if (e.key === "ArrowLeft") onPrev();
			if (e.key === "ArrowRight") onNext();
		};
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onKey);
		};
	}, [
		onClose,
		onPrev,
		onNext
	]);
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4",
		children: [
			/* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: onClose,
				className: "absolute top-4 right-4 size-11 rounded-full bg-white/10 text-white grid place-items-center hover:bg-white/20 transition-colors",
				"aria-label": t.gallery.close,
				children: /* @__PURE__ */ jsx(X, { className: "size-5" })
			}),
			/* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: onPrev,
				className: "absolute left-4 top-1/2 -translate-y-1/2 size-12 rounded-full bg-white/10 text-white grid place-items-center hover:bg-white/20 transition-colors",
				"aria-label": t.gallery.prev,
				children: /* @__PURE__ */ jsx(ChevronLeft, { className: "size-6" })
			}),
			/* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: onNext,
				className: "absolute right-4 top-1/2 -translate-y-1/2 size-12 rounded-full bg-white/10 text-white grid place-items-center hover:bg-white/20 transition-colors",
				"aria-label": t.gallery.next,
				children: /* @__PURE__ */ jsx(ChevronRight, { className: "size-6" })
			}),
			/* @__PURE__ */ jsx("img", {
				src: image.src,
				alt: image.alt,
				className: "max-h-[90vh] max-w-[95vw] object-contain rounded-lg shadow-2xl"
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm",
				children: [
					index + 1,
					" / ",
					galleryImages.length
				]
			})
		]
	});
}
function GallerySection() {
	const { t } = useLanguage();
	const [lightboxIndex, setLightboxIndex] = useState(null);
	const openLightbox = (index) => setLightboxIndex(index);
	const closeLightbox = () => setLightboxIndex(null);
	const prevLightbox = () => setLightboxIndex((i) => i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length);
	const nextLightbox = () => setLightboxIndex((i) => i === null ? null : (i + 1) % galleryImages.length);
	return /* @__PURE__ */ jsxs("section", {
		id: "gallery",
		className: "bg-cream",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "relative h-[55vh] min-h-[350px] max-h-[600px] overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("img", {
						src: galleryImages[0]?.src,
						alt: "",
						className: "absolute top-0 w-full h-full object-cover md:object-[25%_25%]"
					}),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-forest/55" }),
					/* @__PURE__ */ jsxs("div", {
						className: "relative z-10 h-full flex flex-col items-center justify-center text-center text-cream px-4",
						children: [
							/* @__PURE__ */ jsx(motion.p, {
								...fadeUp,
								className: "text-script text-3xl text-sunshine",
								children: t.gallery.label
							}),
							/* @__PURE__ */ jsx(motion.h2, {
								...fadeUp,
								className: "text-display text-[clamp(2.25rem,5vw,4rem)] mt-2",
								children: t.gallery.title
							}),
							/* @__PURE__ */ jsx(motion.p, {
								...fadeUp,
								className: "max-w-xl mt-4 text-cream/85",
								children: t.gallery.subtitle
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "max-w-6xl mx-auto px-4 py-16 md:py-24",
				children: /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 auto-rows-[140px] sm:auto-rows-[150px] md:auto-rows-[160px] gap-3 md:gap-4 grid-flow-dense",
					children: galleryImages.map((img, i) => /* @__PURE__ */ jsxs(motion.button, {
						type: "button",
						initial: {
							opacity: 0,
							scale: .95
						},
						whileInView: {
							opacity: 1,
							scale: 1
						},
						viewport: {
							once: true,
							margin: "-40px"
						},
						transition: {
							duration: .5,
							delay: i % 12 * .04
						},
						onClick: () => openLightbox(i),
						className: `group relative overflow-hidden rounded-2xl shadow-md ${bentoPattern[i % bentoPattern.length]}`,
						children: [/* @__PURE__ */ jsx("img", {
							src: img.src,
							alt: img.alt,
							loading: "lazy",
							className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
						}), /* @__PURE__ */ jsx("span", {
							className: "absolute inset-0 bg-forest/0 group-hover:bg-forest/40 transition-colors flex items-center justify-center",
							children: /* @__PURE__ */ jsx(ZoomIn, { className: "size-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" })
						})]
					}, i))
				})
			}),
			lightboxIndex !== null && /* @__PURE__ */ jsx(GalleryLightbox, {
				index: lightboxIndex,
				onClose: closeLightbox,
				onPrev: prevLightbox,
				onNext: nextLightbox
			})
		]
	});
}
function Stats() {
	const { t } = useLanguage();
	const stats = t.stats.items;
	const colors = [
		"bg-sunshine text-ink",
		"bg-orange-zest text-cream",
		"bg-cream text-forest"
	];
	const rotations = [
		"-rotate-6",
		"rotate-3",
		"-rotate-3"
	];
	return /* @__PURE__ */ jsx("section", {
		className: "bg-forest text-cream py-24 md:py-32 relative overflow-hidden",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-6xl mx-auto px-4 text-center",
			children: [
				/* @__PURE__ */ jsx(motion.h2, {
					...fadeUp,
					className: "text-display text-[clamp(2.25rem,5vw,4rem)] whitespace-pre-line",
					children: t.stats.title
				}),
				/* @__PURE__ */ jsx(motion.p, {
					...fadeUp,
					className: "max-w-xl mx-auto mt-4 text-cream/70",
					children: t.stats.subtitle
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "relative mt-16 h-[420px] md:h-[500px]",
					children: [/* @__PURE__ */ jsx("img", {
						src: stats_person_default,
						alt: "",
						loading: "lazy",
						className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-64 md:size-80 object-cover rounded-full shadow-2xl border-4 border-cream"
					}), stats.map((s, i) => {
						return /* @__PURE__ */ jsx(motion.div, {
							initial: {
								opacity: 0,
								scale: .6
							},
							whileInView: {
								opacity: 1,
								scale: 1
							},
							viewport: { once: true },
							transition: {
								delay: i * .15,
								type: "spring",
								stiffness: 120
							},
							whileHover: { scale: 1.05 },
							className: `absolute ${[
								"left-[5%] top-[10%]",
								"right-[5%] top-[20%]",
								"left-1/2 -translate-x-1/2 bottom-0"
							][i]} ${colors[i]} ${rotations[i]} size-36 md:size-40 grid place-items-center rounded-[40%_60%_50%_50%/60%_40%_60%_40%] shadow-2xl px-3`,
							children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-display text-3xl md:text-4xl",
								children: s.value
							}), /* @__PURE__ */ jsx("p", {
								className: "text-xs md:text-sm font-medium mt-1",
								children: s.label
							})] })
						}, s.label);
					})]
				})
			]
		})
	});
}
function Testimonials() {
	const { t } = useLanguage();
	const testimonials = t.testimonials.items;
	const [idx, setIdx] = useState(0);
	const item = testimonials[idx];
	return /* @__PURE__ */ jsx("section", {
		className: "bg-cream py-24 md:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-5xl mx-auto px-4 text-center",
			children: [
				/* @__PURE__ */ jsx(motion.p, {
					...fadeUp,
					className: "text-script text-3xl text-orange-zest",
					children: t.testimonials.label
				}),
				/* @__PURE__ */ jsx(motion.h2, {
					...fadeUp,
					className: "text-display text-forest text-[clamp(2.25rem,5vw,4rem)] mt-2",
					children: t.testimonials.title
				}),
				/* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .5 },
					className: "mt-12 grid md:grid-cols-3 gap-6 items-center",
					children: [
						/* @__PURE__ */ jsx("img", {
							src: testi_1_default,
							alt: "",
							loading: "lazy",
							className: "hidden md:block aspect-[4/5] rounded-3xl object-cover w-full shadow-lg"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "bg-forest text-cream rounded-3xl p-8 md:p-10 text-left relative",
							children: [
								/* @__PURE__ */ jsx(Quote, { className: "absolute -top-4 -left-2 size-10 text-sunshine" }),
								/* @__PURE__ */ jsxs("p", {
									className: "font-display text-xl md:text-2xl leading-snug",
									children: [
										"“",
										item.quote,
										"”"
									]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "flex items-center gap-1 mt-4 text-sunshine",
									children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "size-4 fill-current" }, i))
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 font-semibold",
									children: item.name
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-sm text-cream/70",
									children: item.role
								})
							]
						}),
						/* @__PURE__ */ jsx("img", {
							src: testi_2_default,
							alt: "",
							loading: "lazy",
							className: "hidden md:block aspect-[4/5] rounded-3xl object-cover w-full shadow-lg"
						})
					]
				}, idx),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-10 flex justify-center items-center gap-4",
					children: [
						/* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => setIdx((idx - 1 + testimonials.length) % testimonials.length),
							className: "size-11 rounded-full bg-forest text-cream grid place-items-center hover:bg-orange-zest transition-colors",
							"aria-label": t.gallery.prev,
							children: /* @__PURE__ */ jsx(ChevronLeft, { className: "size-5" })
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex gap-2",
							children: testimonials.map((_, i) => /* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => setIdx(i),
								"aria-label": `${i + 1}`,
								className: `h-2 rounded-full transition-all ${i === idx ? "w-8 bg-forest" : "w-2 bg-forest/30"}`
							}, i))
						}),
						/* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => setIdx((idx + 1) % testimonials.length),
							className: "size-11 rounded-full bg-forest text-cream grid place-items-center hover:bg-orange-zest transition-colors",
							"aria-label": t.gallery.next,
							children: /* @__PURE__ */ jsx(ChevronRight, { className: "size-5" })
						})
					]
				})
			]
		})
	});
}
function ContactSection() {
	const { t } = useLanguage();
	return /* @__PURE__ */ jsx("section", {
		id: "contact",
		className: "bg-cream py-16 md:py-24",
		children: /* @__PURE__ */ jsx("div", {
			className: "max-w-7xl mx-auto px-4",
			children: /* @__PURE__ */ jsxs("div", {
				className: "relative grid lg:grid-cols-2 rounded-[2rem] overflow-hidden bg-forest text-cream shadow-2xl",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative h-80 lg:h-auto min-h-[320px]",
					children: [/* @__PURE__ */ jsx("img", {
						src: kontaktslika_default,
						alt: "Restoran Garden",
						loading: "lazy",
						className: "absolute inset-0 size-full object-cover"
					}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-forest/50 via-transparent to-forest/30" })]
				}), /* @__PURE__ */ jsxs("div", {
					className: "p-8 md:p-12",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-script text-2xl text-sunshine",
							children: t.contact.label
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "text-display text-[clamp(2.25rem,5vw,3.5rem)] mt-1",
							children: t.contact.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-cream/80 text-sm max-w-md",
							children: t.contact.subtitle
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 space-y-5",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ jsx(Phone, { className: "size-5 text-sunshine mt-0.5 shrink-0" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
										className: "font-semibold",
										children: t.contact.phone
									}), /* @__PURE__ */ jsx("a", {
										href: `tel:${PHONE}`,
										className: "text-cream/85 hover:text-sunshine transition-colors",
										children: PHONE_DISPLAY
									})] })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ jsx(MapPin, { className: "size-5 text-sunshine mt-0.5 shrink-0" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
										className: "font-semibold",
										children: t.contact.address
									}), /* @__PURE__ */ jsx("p", {
										className: "text-cream/85",
										children: ADDRESS
									})] })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ jsx(Mail, { className: "size-5 text-sunshine mt-0.5 shrink-0" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
										className: "font-semibold",
										children: t.contact.email
									}), /* @__PURE__ */ jsx("a", {
										href: `mailto:${EMAIL}`,
										className: "text-cream/85 hover:text-sunshine transition-colors",
										children: EMAIL
									})] })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ jsx(Instagram, { className: "size-5 text-sunshine mt-0.5 shrink-0" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
										className: "font-semibold",
										children: t.contact.instagram
									}), /* @__PURE__ */ jsx("a", {
										href: INSTAGRAM,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "text-cream/85 hover:text-sunshine transition-colors",
										children: "@restaurantgarden2018"
									})] })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ jsx(Clock, { className: "size-5 text-sunshine mt-0.5 shrink-0" }), /* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsx("p", {
											className: "font-semibold",
											children: t.contact.hoursTitle
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-cream/85",
											children: t.contact.hoursWeek
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-cream/70",
											children: t.contact.hoursMonday
										})
									] })]
								})
							]
						}),
						/* @__PURE__ */ jsxs("a", {
							href: `tel:${PHONE}`,
							className: "mt-8 inline-flex items-center gap-2 rounded-full bg-sunshine text-ink px-6 py-3.5 font-semibold hover:bg-leaf transition-colors",
							children: [/* @__PURE__ */ jsx(Phone, { className: "size-4" }), t.contact.callUs]
						})
					]
				})]
			})
		})
	});
}
function Footer() {
	const { t } = useLanguage();
	return /* @__PURE__ */ jsx("footer", {
		className: "bg-cream pt-16 pb-8",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-6xl mx-auto px-4",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "text-center",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-script text-2xl text-orange-zest",
						children: t.footer.label
					}), /* @__PURE__ */ jsx("h2", {
						className: "text-display text-forest text-[clamp(2rem,5vw,3.5rem)] mt-1 whitespace-pre-line",
						children: t.footer.title
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-12 grid md:grid-cols-3 gap-8 text-sm",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ jsx(Clock, { className: "size-5 text-orange-zest mt-0.5 shrink-0" }), /* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("p", {
									className: "font-semibold text-forest",
									children: t.footer.hours
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-muted-foreground",
									children: t.contact.hoursWeek
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-muted-foreground",
									children: t.contact.hoursMonday
								})
							] })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-center gap-3 text-forest",
							children: [/* @__PURE__ */ jsx("a", {
								href: INSTAGRAM,
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": "Instagram",
								className: "size-10 grid place-items-center rounded-full border border-forest/20 hover:bg-forest hover:text-cream transition-colors",
								children: /* @__PURE__ */ jsx(Instagram, { className: "size-4" })
							}), /* @__PURE__ */ jsx("a", {
								href: FACEBOOK,
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": "Facebook",
								className: "size-10 grid place-items-center rounded-full border border-forest/20 hover:bg-forest hover:text-cream transition-colors",
								children: /* @__PURE__ */ jsx(Facebook, { className: "size-4" })
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-start gap-3 md:justify-end",
							children: [/* @__PURE__ */ jsx(MapPin, { className: "size-5 text-orange-zest mt-0.5 shrink-0" }), /* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("p", {
									className: "font-semibold text-forest",
									children: t.footer.visit
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-muted-foreground",
									children: ADDRESS
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "text-muted-foreground flex items-center gap-1.5",
									children: [
										/* @__PURE__ */ jsx(Phone, { className: "size-3.5" }),
										" ",
										PHONE_DISPLAY
									]
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "text-muted-foreground flex items-center gap-1.5",
									children: [
										/* @__PURE__ */ jsx(Mail, { className: "size-3.5" }),
										" ",
										EMAIL
									]
								})
							] })]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-16 flex items-center justify-center gap-3",
					children: [/* @__PURE__ */ jsx("span", {
						className: "grid place-items-center size-14 rounded-full bg-forest text-sunshine overflow-hidden",
						children: /* @__PURE__ */ jsx("img", {
							src: logo_default,
							alt: "",
							className: "w-full h-full object-cover"
						})
					}), /* @__PURE__ */ jsx("span", {
						className: "text-display text-forest text-[clamp(2rem,8vw,5rem)] leading-none",
						children: "Restoran Garden | Developed by David"
					})]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mt-8 text-center text-xs text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						t.footer.copyright
					]
				})
			]
		})
	});
}
function IndexContent() {
	return /* @__PURE__ */ jsxs("main", {
		className: "bg-cream text-ink overflow-x-hidden relative",
		children: [
			/* @__PURE__ */ jsx(motion.img, {
				src: sliced_paprika_default,
				animate: {
					y: [
						0,
						-15,
						0
					],
					rotate: [
						0,
						5,
						0
					]
				},
				transition: {
					duration: 7,
					repeat: Infinity,
					ease: "easeInOut"
				},
				className: "absolute top-[15%] left-[5%] size-16 md:size-24 object-contain opacity-60 z-0 drop-shadow-md",
				alt: ""
			}),
			/* @__PURE__ */ jsx(motion.img, {
				src: _001_1_default,
				animate: {
					y: [
						0,
						20,
						0
					],
					rotate: [
						0,
						-10,
						0
					]
				},
				transition: {
					duration: 8,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 1
				},
				className: "absolute bottom-[20%] right-[8%] size-20 md:size-32 object-contain opacity-50 z-0 drop-shadow-md",
				alt: ""
			}),
			/* @__PURE__ */ jsx(motion.img, {
				src: _004_1_default,
				animate: {
					y: [
						0,
						-20,
						0
					],
					rotate: [
						0,
						8,
						0
					]
				},
				transition: {
					duration: 9,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 2
				},
				className: "absolute top-[60%] left-[10%] size-24 md:size-36 object-contain opacity-40 z-0 drop-shadow-md",
				alt: ""
			}),
			/* @__PURE__ */ jsx(motion.img, {
				src: _005_default,
				animate: {
					y: [
						0,
						15,
						0
					],
					rotate: [
						0,
						-5,
						0
					]
				},
				transition: {
					duration: 6,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 3
				},
				className: "absolute top-[30%] right-[15%] size-16 md:size-24 object-contain opacity-60 z-0 drop-shadow-md",
				alt: ""
			}),
			/* @__PURE__ */ jsx(Nav, {}),
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx(BrandStory, {}),
			/* @__PURE__ */ jsx(Banner, {}),
			/* @__PURE__ */ jsx(MenuSection, {}),
			/* @__PURE__ */ jsx(FeaturesTabs, {}),
			/* @__PURE__ */ jsx(GallerySection, {}),
			/* @__PURE__ */ jsx(Stats, {}),
			/* @__PURE__ */ jsx(Testimonials, {}),
			/* @__PURE__ */ jsx(ContactSection, {}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
function IndexPage() {
	return /* @__PURE__ */ jsx(LanguageProvider, { children: /* @__PURE__ */ jsx(IndexContent, {}) });
}
//#endregion
export { IndexPage as component };
