'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "28380b8b7bedcb5822788a0b502fea3f",
"favicon.ico": "49860b60914ac0ba5baab1ee6321d975",
"index.html": "f9e114ce42486924c2ba0e9a88093927",
"/": "f9e114ce42486924c2ba0e9a88093927",
"main.dart.js": "885f7f91d0855b24d3f3212895cdeafa",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/icon-192.png": "8d08ea1990e43ed79221e70e8eaa8872",
"icons/icon-512.png": "40e5d8902e1e24f4db709b0dea57a792",
"manifest.json": "ac307d04aa94d9ebb74c5cc75e1df7b5",
"assets/AssetManifest.json": "a1644c8d88438604617c49ea02d67008",
"assets/NOTICES": "a7e3f03fba253ffd0e3a430696fa2503",
"assets/FontManifest.json": "b2d2420b197eab1068d5a8e519f9782a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "8e7f807ef943bff1f6d3c2c6e0f3769e",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "ca9ce9ff0676a9b04ef0f8a3ad17dd08",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/eva_icons_flutter/lib/fonts/evaicons.ttf": "b600c99b39c9837f405131463e91f61a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/image/background.png": "97b8a1ddaf9ca6db6fbae542f74b77b1",
"assets/assets/template1/instagram.png": "4ee3561f8f801c7f15031fd8427d6158",
"assets/assets/template1/github.png": "9c6503f184c8474a28ba2c50e1b735de",
"assets/assets/template1/pp1.jpeg": "4ca1cce0879cda4402ca373018c1dfd7",
"assets/assets/template1/porto2.png": "211efcf603b63625aa5795315f5c2125",
"assets/assets/template1/porto3.png": "28f605fd8c523f0b44bcc29b67f7df85",
"assets/assets/template1/porto1.png": "a44a12444653846cea338365f1434752",
"assets/assets/template1/pp2.jpeg": "c40c3235b721d9b74bbec6b6fc186432",
"assets/assets/template1/logo.png": "4185c5199927f22106fa146b3c5a6066",
"assets/assets/template1/porto4.png": "16c278fbec8b633c4712319cf6b56086",
"assets/assets/template1/logoWeb.png": "6f5b093975280439a539017f9d741602",
"assets/assets/template1/twitter.png": "7b723dcc8e1136e2f3afd2a72e9c909a",
"assets/assets/template1/pp3.jpeg": "c11ea4e1ea99e6b4885f70e1746ea326",
"assets/assets/template1/linkedin.png": "113e8266381e572d692e72d09652aadc",
"assets/assets/template1/porto5.png": "0d8daa1e2725d4521b2a2b90a84a9e7d",
"assets/assets/template1/codepen.png": "259159035a18d6f4d07f43b21cb9d3ef",
"assets/assets/template1/pp4.jpeg": "e43134c89ae7fcfc93771c6b10be6a24",
"assets/assets/font/IBMPlexMono-Thin.ttf": "7d2bf8a4b8269922bca1106daefe14e9",
"assets/assets/font/OpenSans-SemiBold.ttf": "33f225b8f5f7d6b34a0926f58f96c1e9",
"assets/assets/font/IBMPlexMono-Bold.ttf": "833884d70558d56ce20c08ef08cd1216",
"assets/assets/font/OpenSans-Light.ttf": "1bf71be111189e76987a4bb9b3115cb7",
"assets/assets/font/IBMPlexMono-Regular.ttf": "741a5a72744c8ec2fa447690bdf1dcc6",
"assets/assets/font/IBMPlexMono-Light.ttf": "1a78bb494af05a31029c68015bb4c168",
"assets/assets/font/OpenSans-Bold.ttf": "50145685042b4df07a1fd19957275b81",
"assets/assets/font/OpenSans-Regular.ttf": "629a55a7e793da068dc580d184cc0e31",
"assets/assets/font/IBMPlexMono-SemiBold.ttf": "2ef28306dae476a5ffd43d1ba8483576",
"assets/assets/font/Poppins/Poppins-ExtraLight.otf": "4918ffef121897b111a9cd50fa23ba34",
"assets/assets/font/Poppins/Poppins-Light.otf": "02c5a7af5427f03f93cd9094334ee181",
"assets/assets/font/Poppins/Poppins-Medium.otf": "f88c443f02135a3ba091560e76ed767f",
"assets/assets/font/Poppins/Poppins-SemiBold.otf": "b0b3d360d13a9649222edd1d844dfc9c",
"assets/assets/font/Poppins/Poppins-Thin.otf": "21792aea22dc450c1b24a2ffc656f6e0",
"assets/assets/font/Poppins/Poppins-Bold.otf": "e47421f9b8cec2661620743c53475c8d",
"assets/assets/font/Poppins/Poppins-Regular.otf": "de2dd9339ae7636475fcd91b3ed0e24f",
"assets/assets/font/Poppins/Poppins-ExtraBold.otf": "162a9aeb6c2ca8567f36a62f0d06da07",
"assets/assets/font/Sofia/SofiaProMedium.otf": "b307c6ce73c3d573c228ecd5de070f45",
"assets/assets/font/Sofia/SofiaProSemiBold.otf": "a57bde9593a32d99ff54c3716859cc19",
"assets/assets/font/Sofia/SofiaProBold.otf": "28b75bc6b4d35b59ecf476db59bc4ecf",
"assets/assets/font/Sofia/SofiaProLight.otf": "52fa5a506994382612ed5936f1e94660",
"assets/assets/font/Sofia/SofiaProUltraLight.otf": "4bdc72d871a96c7a9bf467f5d5cff5f0",
"assets/assets/font/Sofia/SofiaProRegular.otf": "bd0a6d0d1ce78e95fb1629450636bc6f",
"assets/assets/font/Sofia/SofiaProExtraLight.otf": "8b590b229ee431c83a27e8930ad80781",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
