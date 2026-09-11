import { tt as __exportAll } from "./errors_CkZeXltj.mjs";
import { d as renderHead, l as renderTemplate, p as createRenderInstruction } from "./server_CH_dA7Kf.mjs";
import { t as createComponent } from "./compiler_Dmd-7Xtt.mjs";
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<html lang="en" data-astro-cid-lcdefpme><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>WALL STREET MOTO // STOCK CHART DIRTBIKE</title><link href="https://fonts.googleapis.com/css2?family=VT323&family=Share+Tech+Mono&display=swap" rel="stylesheet">${renderHead($$result)}</head><body data-astro-cid-lcdefpme><header data-astro-cid-lcdefpme><div class="logo" data-astro-cid-lcdefpme>WALL STREET MOTO // STOCK CHART RIDER v1.0</div><div class="stats-ticker" data-astro-cid-lcdefpme><div class="stat-item" data-astro-cid-lcdefpme>MARKET STATUS: <span class="green-text" data-astro-cid-lcdefpme>LIVE BULL RUN</span></div><div class="stat-item" data-astro-cid-lcdefpme>SYS: <span id="sys-status" data-astro-cid-lcdefpme>READY</span></div></div></header><div class="container" data-astro-cid-lcdefpme><!-- Sidebar --><div class="sidebar" data-astro-cid-lcdefpme><div class="section-title" data-astro-cid-lcdefpme>> SELECT ASSET</div><div class="ticker-input-group" data-astro-cid-lcdefpme><input type="text" id="ticker-input" value="TSLA" placeholder="e.g. AAPL, BTC, SPY" data-astro-cid-lcdefpme><button id="load-ticker-btn" data-astro-cid-lcdefpme>LOAD</button></div><div class="section-title" data-astro-cid-lcdefpme>> QUICK TICKERS</div><div class="preset-grid" data-astro-cid-lcdefpme><button class="preset-btn" data-ticker="TSLA" data-astro-cid-lcdefpme>TSLA (Tesla)</button><button class="preset-btn" data-ticker="BTC-USD" data-astro-cid-lcdefpme>BTC (Bitcoin)</button><button class="preset-btn" data-ticker="AAPL" data-astro-cid-lcdefpme>AAPL (Apple)</button><button class="preset-btn" data-ticker="NVDA" data-astro-cid-lcdefpme>NVDA (Nvidia)</button><button class="preset-btn" data-ticker="GME" data-astro-cid-lcdefpme>GME (GameStop)</button><button class="preset-btn" data-ticker="SPY" data-astro-cid-lcdefpme>SPY (S&P 500)</button></div><div class="section-title" data-astro-cid-lcdefpme>> TELEMETRY</div><div class="game-info" data-astro-cid-lcdefpme><p data-astro-cid-lcdefpme><strong data-astro-cid-lcdefpme>CHART TERRAIN:</strong> Real closing prices mapped to Y-axis terrain elevations.</p><p style="margin-top: 8px;" data-astro-cid-lcdefpme><strong data-astro-cid-lcdefpme>OBJECTIVE:</strong> Ride the volatility to the present day without flipping your dirtbike!</p><p style="margin-top: 8px;" data-astro-cid-lcdefpme><strong data-astro-cid-lcdefpme>CONTROLS:</strong></p><p data-astro-cid-lcdefpme>[W] or [UP] - Accelerate</p><p data-astro-cid-lcdefpme>[S] or [DOWN] - Brake / Reverse</p><p data-astro-cid-lcdefpme>[A] or [LEFT] - Tilt Backward</p><p data-astro-cid-lcdefpme>[D] or [RIGHT] - Tilt Forward</p></div></div><!-- Main Game --><div class="main-game" data-astro-cid-lcdefpme><div class="hud-overlay" data-astro-cid-lcdefpme><div class="hud-box" id="hud-ticker" data-astro-cid-lcdefpme>ASSET: TSLA <span class="market-badge" id="hud-change" data-astro-cid-lcdefpme>+14.2%</span></div><div class="hud-box" id="hud-score" data-astro-cid-lcdefpme>DIST: 0m</div><div class="hud-box" id="hud-speed" data-astro-cid-lcdefpme>SPEED: 0 MPH</div></div><canvas id="gameCanvas" data-astro-cid-lcdefpme></canvas><!-- Splash Modal --><div class="modal" id="start-modal" data-astro-cid-lcdefpme><h1 data-astro-cid-lcdefpme>WALL STREET MOTO</h1><p data-astro-cid-lcdefpme>Ride your favorite stock or crypto chart as an extreme arcade dirtbike terrain! Every price swing is a jump, every crash is a market correction.</p><button class="big-btn" id="start-game-btn" data-astro-cid-lcdefpme>IGNITE ENGINE</button><div class="controls-guide" data-astro-cid-lcdefpme>Use W/A/S/D or Arrow Keys to Drive & Balance</div></div><!-- Game Over Modal --><div class="modal hidden" id="gameover-modal" data-astro-cid-lcdefpme><h1 class="red-text" id="go-title" data-astro-cid-lcdefpme>MARKET CRASH!</h1><p id="go-message" data-astro-cid-lcdefpme>Your dirtbike flipped during a bearish dip. Final Distance: 0m</p><button class="big-btn" id="restart-game-btn" data-astro-cid-lcdefpme>BUY THE DIP (RESTART)</button></div></div></div>${renderScript($$result, "/home/sreecha/stock-dirtbike-game/src/pages/index.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "/home/sreecha/stock-dirtbike-game/src/pages/index.astro", void 0);
var $$file = "/home/sreecha/stock-dirtbike-game/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
