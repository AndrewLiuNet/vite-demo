import { readFileSync, writeFileSync } from "fs";
import path from "path";

export default function updateManifestPlugin() {
  return {
    name: "update-manifest",
    buildStart() {
      try {
        const filePath = path.resolve("./public", "manifest.json");
        const data = readFileSync(filePath, "utf8");
        const dataObj = JSON.parse(data);
        dataObj.timestamp = new Date().getTime();
        writeFileSync(filePath, JSON.stringify(dataObj, null, 2), "utf8");
        console.log("✅ Manifest.json 时间戳已更新");
      } catch (err) {
        console.error("❌ 更新 manifest.json 时出错:", err);
      }
    },
  };
}
