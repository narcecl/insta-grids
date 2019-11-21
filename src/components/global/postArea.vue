<template>
	<div class="post-area" v-cloak>
		<div class="cont" ref="cont">
			<grid 
				:draggable="true" 
				:sortable="true" 
				:items="$store.getters.getPosts" 
				v-if="$store.getters.getPosts.length > 0 && ready" 
				:cellWidth="item_width" 
				:cellHeight="item_width"
				@change="changeEvent"
				@sort="sortEvent"
			>
				<template slot="cell" slot-scope="props">
					<div class="grid-item">
						<div class="grid-cont">
							<a href="#" class="delete-item" @click.prevent="deletePost(props.index)">
								<span class="fa fa-trash"></span>
							</a>
							<img :draggable="false" :src="props.item.image">
						</div>
					</div>
				</template>
			</grid>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'postArea',
		data: function(){
			return {
				items_per_row: 3,
				item_width: null,
				ready: false,
				drag: false,
				"edges": [
					{
					"node": {
					  "__typename": "GraphSidecar",
					  "id": "2178061332959839433",
					  "edge_media_to_caption": {
					    "edges": [
					      {
					        "node": {
					          "text": "Aún queda mucho por lo que luchar.\n.\n.\n.\n.\n.\n\n#chile #chiledesperto #instachile #chilegram #plazadeladignidad #santiago #highlightscl"
					        }
					      }
					    ]
					  },
					  "shortcode": "B46Bz4SFcTJ",
					  "edge_media_to_comment": {
					    "count": 0
					  },
					  "comments_disabled": false,
					  "taken_at_timestamp": 1573865165,
					  "dimensions": {
					    "height": 1350,
					    "width": 1080
					  },
					  "display_url": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/75288872_1990587277711617_8869974797554531369_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=109&oh=6e8d953af2e5668566451780e1bdd515&oe=5E524D2D",
					  "edge_liked_by": {
					    "count": 54
					  },
					  "edge_media_preview_like": {
					    "count": 167
					  },
					  "location": {
					    "id": "104750624304877",
					    "has_public_page": true,
					    "name": "Plaza De La Dignidad",
					    "slug": "plaza-de-la-dignidad"
					  },
					  "gating_info": null,
					  "fact_check_overall_rating": null,
					  "fact_check_information": null,
					  "media_preview": null,
					  "owner": {
					    "id": "20704880069",
					    "username": "narcecl"
					  },
					  "thumbnail_src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/75288872_1990587277711617_8869974797554531369_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=109&oh=8c323bcfc7578052ed743ed385fc218d&oe=5E585989",
					  "thumbnail_resources": [
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.180.1440.1440a/s150x150/75288872_1990587277711617_8869974797554531369_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=109&oh=f2d950e2e36f14bc1e38e5209ec0123b&oe=5E4CECB9",
					      "config_width": 150,
					      "config_height": 150
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.180.1440.1440a/s240x240/75288872_1990587277711617_8869974797554531369_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=109&oh=f7ee7398c91d0cc3a4f7b1efc74bb0cc&oe=5E88E4BF",
					      "config_width": 240,
					      "config_height": 240
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.180.1440.1440a/s320x320/75288872_1990587277711617_8869974797554531369_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=109&oh=60a9a4a8679205ac912c0dcb463fd262&oe=5E4D7FC1",
					      "config_width": 320,
					      "config_height": 320
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.180.1440.1440a/s480x480/75288872_1990587277711617_8869974797554531369_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=109&oh=40860cc0a8b88f5a3fa09e9023021228&oe=5E88A786",
					      "config_width": 480,
					      "config_height": 480
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/75288872_1990587277711617_8869974797554531369_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=109&oh=8c323bcfc7578052ed743ed385fc218d&oe=5E585989",
					      "config_width": 640,
					      "config_height": 640
					    }
					  ],
					  "is_video": false,
					  "accessibility_caption": "La imagen puede contener: cielo, multitud, árbol, planta y exterior"
					}
					},
					{
					"node": {
					  "__typename": "GraphSidecar",
					  "id": "2177343141807867119",
					  "edge_media_to_caption": {
					    "edges": [
					      {
					        "node": {
					          "text": "Segunda ronda de fotitos.\nMe ha dado mucho gusto salir a la calle, ver harto apañe, harta gente luchando y exigiendo sus derechos, puro awante cabros, les juro que nunca me he sentido tan seguro como ahora, mientras voy sacando fotos❤️.\n.\n.\n.\n.\n.\n#chile #chiledesperto #highlightscl #chilegram #instachile #santiago #plazadeladignidad"
					        }
					      }
					    ]
					  },
					  "shortcode": "B43eg0pl0Tv",
					  "edge_media_to_comment": {
					    "count": 0
					  },
					  "comments_disabled": false,
					  "taken_at_timestamp": 1573779550,
					  "dimensions": {
					    "height": 1350,
					    "width": 1080
					  },
					  "display_url": "https://instagram.fscl11-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/72979454_1938647122948342_9006352904647995452_n.jpg?_nc_ht=instagram.fscl11-1.fna.fbcdn.net&_nc_cat=110&oh=cbe0a8792e38be734717306a8cbf4b08&oe=5E882C2C",
					  "edge_liked_by": {
					    "count": 48
					  },
					  "edge_media_preview_like": {
					    "count": 317
					  },
					  "location": {
					    "id": "104750624304877",
					    "has_public_page": true,
					    "name": "Plaza De La Dignidad",
					    "slug": "plaza-de-la-dignidad"
					  },
					  "gating_info": null,
					  "fact_check_overall_rating": null,
					  "fact_check_information": null,
					  "media_preview": null,
					  "owner": {
					    "id": "20704880069",
					    "username": "narcecl"
					  },
					  "thumbnail_src": "https://instagram.fscl11-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/72979454_1938647122948342_9006352904647995452_n.jpg?_nc_ht=instagram.fscl11-1.fna.fbcdn.net&_nc_cat=110&oh=5fa7023e568beb6f81be9426d9cb7453&oe=5E83B788",
					  "thumbnail_resources": [
					    {
					      "src": "https://instagram.fscl11-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.180.1440.1440a/s150x150/72979454_1938647122948342_9006352904647995452_n.jpg?_nc_ht=instagram.fscl11-1.fna.fbcdn.net&_nc_cat=110&oh=c0326e653639d92de028b58a9db12f63&oe=5E6602B8",
					      "config_width": 150,
					      "config_height": 150
					    },
					    {
					      "src": "https://instagram.fscl11-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.180.1440.1440a/s240x240/72979454_1938647122948342_9006352904647995452_n.jpg?_nc_ht=instagram.fscl11-1.fna.fbcdn.net&_nc_cat=110&oh=c661bdd93e6c801d3e2e5fa316292c07&oe=5E4F80BE",
					      "config_width": 240,
					      "config_height": 240
					    },
					    {
					      "src": "https://instagram.fscl11-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.180.1440.1440a/s320x320/72979454_1938647122948342_9006352904647995452_n.jpg?_nc_ht=instagram.fscl11-1.fna.fbcdn.net&_nc_cat=110&oh=90e4af37407157d9b9902f27804be6eb&oe=5E4E1AC0",
					      "config_width": 320,
					      "config_height": 320
					    },
					    {
					      "src": "https://instagram.fscl11-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.180.1440.1440a/s480x480/72979454_1938647122948342_9006352904647995452_n.jpg?_nc_ht=instagram.fscl11-1.fna.fbcdn.net&_nc_cat=110&oh=1e80f8e24ee59dc9b5ad9616eb3a5665&oe=5E4FBB87",
					      "config_width": 480,
					      "config_height": 480
					    },
					    {
					      "src": "https://instagram.fscl11-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/72979454_1938647122948342_9006352904647995452_n.jpg?_nc_ht=instagram.fscl11-1.fna.fbcdn.net&_nc_cat=110&oh=5fa7023e568beb6f81be9426d9cb7453&oe=5E83B788",
					      "config_width": 640,
					      "config_height": 640
					    }
					  ],
					  "is_video": false,
					  "accessibility_caption": "La imagen puede contener: una o varias personas, cielo, multitud y exterior"
					}
					},
					{
					"node": {
					  "__typename": "GraphSidecar",
					  "id": "2176592678715930292",
					  "edge_media_to_caption": {
					    "edges": [
					      {
					        "node": {
					          "text": "Ayer por fin pude salir a recorrer la ciudad con mi cámara y la hora dorada pe permitió tomar estas fotitos❤️.\n.\n.\n.\n.\n#chile #chiledesperto #plazadeladignidad #protestaschile #santiago #instachile"
					        }
					      }
					    ]
					  },
					  "shortcode": "B40z4JblDa0",
					  "edge_media_to_comment": {
					    "count": 6
					  },
					  "comments_disabled": false,
					  "taken_at_timestamp": 1573690088,
					  "dimensions": {
					    "height": 1350,
					    "width": 1080
					  },
					  "display_url": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/75586249_491953341416414_4079562892909246340_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=102&oh=c83c9798ca7796c3ff6a3e11d62a45d1&oe=5E851FEE",
					  "edge_liked_by": {
					    "count": 62
					  },
					  "edge_media_preview_like": {
					    "count": 416
					  },
					  "location": {
					    "id": "104750624304877",
					    "has_public_page": true,
					    "name": "Plaza De La Dignidad",
					    "slug": "plaza-de-la-dignidad"
					  },
					  "gating_info": null,
					  "fact_check_overall_rating": null,
					  "fact_check_information": null,
					  "media_preview": null,
					  "owner": {
					    "id": "20704880069",
					    "username": "narcecl"
					  },
					  "thumbnail_src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/75586249_491953341416414_4079562892909246340_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=102&oh=092d9f3b20324d9cbb82b286dc11d3ba&oe=5E519F7D",
					  "thumbnail_resources": [
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.180.1440.1440a/s150x150/75586249_491953341416414_4079562892909246340_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=102&oh=c29089c16c8a617d3274e1ce9ec9a39c&oe=5E57CDB6",
					      "config_width": 150,
					      "config_height": 150
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.180.1440.1440a/s240x240/75586249_491953341416414_4079562892909246340_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=102&oh=f4f2c77a031d8b3ca89d877d46a398e7&oe=5E8AFEFC",
					      "config_width": 240,
					      "config_height": 240
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.180.1440.1440a/s320x320/75586249_491953341416414_4079562892909246340_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=102&oh=7ffa569bc4e9ba5023ff756415422e85&oe=5E566746",
					      "config_width": 320,
					      "config_height": 320
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.180.1440.1440a/s480x480/75586249_491953341416414_4079562892909246340_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=102&oh=ea49362f10d368b757d06d57a47dca3e&oe=5E6F071C",
					      "config_width": 480,
					      "config_height": 480
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/75586249_491953341416414_4079562892909246340_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=102&oh=092d9f3b20324d9cbb82b286dc11d3ba&oe=5E519F7D",
					      "config_width": 640,
					      "config_height": 640
					    }
					  ],
					  "is_video": false,
					  "accessibility_caption": "La imagen puede contener: una o varias personas, multitud, cielo y exterior"
					}
					},
					{
					"node": {
					  "__typename": "GraphImage",
					  "id": "2172285377540546844",
					  "edge_media_to_caption": {
					    "edges": [
					      {
					        "node": {
					          "text": "Oh, we spend our lives looking for things we can't find.\n.\n.\n.\n.\n\n#portrait #instachile #portraitvisioncl #highlightscl #rebelarte #zetitafoto #instagood #pursuitofportraits #instagood #portraitpage #aovportraits #folkportraits #moodyports #creative_portraits #portraitgames #portrait_vision #portrait_shots #portraitmood #portraitvisuals"
					        }
					      }
					    ]
					  },
					  "shortcode": "B4lggqnFGEc",
					  "edge_media_to_comment": {
					    "count": 0
					  },
					  "comments_disabled": false,
					  "taken_at_timestamp": 1573176618,
					  "dimensions": {
					    "height": 1350,
					    "width": 1080
					  },
					  "display_url": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/72752548_430759930843499_8654668173179105533_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=111&oh=c39c0bace93559628e2b19baef79fd34&oe=5E88F8C0",
					  "edge_liked_by": {
					    "count": 44
					  },
					  "edge_media_preview_like": {
					    "count": 413
					  },
					  "location": {
					    "id": "112371848779363",
					    "has_public_page": true,
					    "name": "Santiago, Chile",
					    "slug": "santiago-chile"
					  },
					  "gating_info": null,
					  "fact_check_overall_rating": null,
					  "fact_check_information": null,
					  "media_preview": "ACEqdFjqc5qvdiMc9z6f1rR3E/MyHj3qjFAs4MknO77o9h3/ADrFW3NNzNCbwfL5PfPWpo4yq4PB/wDr/wD1qZcobVgyHj3/AJVZZxIS44BI49BgVZNrEG8+36UU7aPT9KKAN29lVIm29cGs+3VJYo854Hb2qCS6+1IVUYAx+NUI7owEqRlD29+5Bqd/Uvb0LN6isC3O4nH4dqkIKDA6Y5/LFUVl82QAcKT06/nWiAWOO3J/w/pVLzJdnsM2p6D9aKl8s+360UCMuAlc4/iB/SmSNuBB6jv/ADHvz3606M/u/wAD/Wom6H/PpT6h0HWq5fP90H/Ctbd8xx24xWbZ9/w/rV5uv4f1NDBCZ9zRVeigD//Z",
					  "owner": {
					    "id": "20704880069",
					    "username": "narcecl"
					  },
					  "thumbnail_src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/72752548_430759930843499_8654668173179105533_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=111&oh=80b870c7b68fb35eac256b97be6df745&oe=5E6802CC",
					  "thumbnail_resources": [
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s150x150/72752548_430759930843499_8654668173179105533_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=111&oh=cdea4bca885c40429d8c36e40659eded&oe=5E698607",
					      "config_width": 150,
					      "config_height": 150
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s240x240/72752548_430759930843499_8654668173179105533_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=111&oh=88c8526334cc7ac297773ca1fbf326b0&oe=5E658C4D",
					      "config_width": 240,
					      "config_height": 240
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s320x320/72752548_430759930843499_8654668173179105533_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=111&oh=d1bbb904eec2d32c8aa4910dd1d90932&oe=5E4F5EF7",
					      "config_width": 320,
					      "config_height": 320
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s480x480/72752548_430759930843499_8654668173179105533_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=111&oh=c1990e32d4dd17b0f1bb4cd3f3f5cc1e&oe=5E826DAD",
					      "config_width": 480,
					      "config_height": 480
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/72752548_430759930843499_8654668173179105533_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=111&oh=80b870c7b68fb35eac256b97be6df745&oe=5E6802CC",
					      "config_width": 640,
					      "config_height": 640
					    }
					  ],
					  "is_video": false,
					  "accessibility_caption": "La imagen puede contener: una o varias personas, primer plano y exterior"
					}
					},
					{
					"node": {
					  "__typename": "GraphImage",
					  "id": "2168603412379533112",
					  "edge_media_to_caption": {
					    "edges": [
					      {
					        "node": {
					          "text": "I've been waiting a while to talk to you.\n.\n.\n.\n.\n\n#portrait #instachile #portraitvisioncl #highlightscl #rebelarte #zetitafoto #instagood #pursuitofportraits #instagood #portraitpage #aovportraits #folkportraits #moodyports #creative_portraits #portraitgames #portrait_vision #portrait_shots #portraitmood #portraitvisuals"
					        }
					      }
					    ]
					  },
					  "shortcode": "B4YbVBVlP84",
					  "edge_media_to_comment": {
					    "count": 0
					  },
					  "comments_disabled": false,
					  "taken_at_timestamp": 1572737693,
					  "dimensions": {
					    "height": 1350,
					    "width": 1080
					  },
					  "display_url": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/72550701_547394956090842_4134100639958087883_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=106&oh=9963acc9df12d63e7bde7fc7fd4c80d9&oe=5E68B3A2",
					  "edge_liked_by": {
					    "count": 33
					  },
					  "edge_media_preview_like": {
					    "count": 237
					  },
					  "location": {
					    "id": "112371848779363",
					    "has_public_page": true,
					    "name": "Santiago, Chile",
					    "slug": "santiago-chile"
					  },
					  "gating_info": null,
					  "fact_check_overall_rating": null,
					  "fact_check_information": null,
					  "media_preview": "ACEqoQrz7d+Kt3EqwqAcknoO5qvApL0ydz53B+6OCfXHNSUTu++MjBG0g4PoasEfu0/H+VVncgg5DB/k/Dr19jV1uFQHpzQFrB5y0VH5TetFIgpoQnzN271UnbfJuHc8flU0yMVwuTk9B/Liqoby256rVFo0JYxhSW+dTwPb3Hv2q5vEkasOmSKxfMXce1XLOFk5YEZH4H+maLWQXuWPMopmBRUkC2zYJJ4yPXnrUM1vFKxYEgn6YpLYZz+P8qzHdsnk9fWjqadC+lrED8zE/kP8a1UcMu0DA+uexrm0ds4yfzrp0+4v+e1MLlLj3opcUUiD/9k=",
					  "owner": {
					    "id": "20704880069",
					    "username": "narcecl"
					  },
					  "thumbnail_src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/72550701_547394956090842_4134100639958087883_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=106&oh=6d4e13df91358d4866960abf4d26a004&oe=5E8A14AE",
					  "thumbnail_resources": [
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s150x150/72550701_547394956090842_4134100639958087883_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=106&oh=33768cfa1d4c54731de4b0cc274eff56&oe=5E6AB265",
					      "config_width": 150,
					      "config_height": 150
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s240x240/72550701_547394956090842_4134100639958087883_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=106&oh=b5a5a97ee48a5b2720e27a6672d59ce8&oe=5E70FA2F",
					      "config_width": 240,
					      "config_height": 240
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s320x320/72550701_547394956090842_4134100639958087883_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=106&oh=7e220408a7ceae009e05418d079ac757&oe=5E6C0B95",
					      "config_width": 320,
					      "config_height": 320
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s480x480/72550701_547394956090842_4134100639958087883_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=106&oh=66e67c4541b171701bb5a537c51bcd96&oe=5E69ABCF",
					      "config_width": 480,
					      "config_height": 480
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/72550701_547394956090842_4134100639958087883_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=106&oh=6d4e13df91358d4866960abf4d26a004&oe=5E8A14AE",
					      "config_width": 640,
					      "config_height": 640
					    }
					  ],
					  "is_video": false,
					  "accessibility_caption": "La imagen puede contener: una o varias personas, personas de pie, gafas, exterior y primer plano"
					}
					},
					{
					"node": {
					  "__typename": "GraphImage",
					  "id": "2166473473790503981",
					  "edge_media_to_caption": {
					    "edges": [
					      {
					        "node": {
					          "text": "Como no puedo subir fotos me tengo que conformar con las que ya tengo, como por la ejemplo ahí te va.\n.\n.\n.\n.\n\n#portrait #instachile #portraitvisioncl #highlightscl #rebelarte #zetitafoto #instagood #pursuitofportraits #instagood #portraitpage #aovportraits #folkportraits #moodyports #creative_portraits #portraitgames #portrait_vision #portrait_shots #portraitmood #portraitvisuals"
					        }
					      }
					    ]
					  },
					  "shortcode": "B4Q3CVcluwt",
					  "edge_media_to_comment": {
					    "count": 5
					  },
					  "comments_disabled": false,
					  "taken_at_timestamp": 1572483785,
					  "dimensions": {
					    "height": 1350,
					    "width": 1080
					  },
					  "display_url": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/71704269_145198136763333_3902296489010963509_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=109&oh=61f8d35d4f7a7d345b5e2fb59434b727&oe=5E663662",
					  "edge_liked_by": {
					    "count": 51
					  },
					  "edge_media_preview_like": {
					    "count": 249
					  },
					  "location": {
					    "id": "427386520",
					    "has_public_page": true,
					    "name": "Santiago Metropolitan Region",
					    "slug": "santiago-metropolitan-region"
					  },
					  "gating_info": null,
					  "fact_check_overall_rating": null,
					  "fact_check_information": null,
					  "media_preview": "ACEqWy65J4bPH8q24EXy9i9BnnvXNW8oVweoxW2bkQqCuC2OlZRKMw3flSMcbm+76ADr+dV1lVzjoSallhil3HO0/eJ9z1wKx1GyUDOcHr61asDujTzRTKKoRPbRKo+bknrVi5CkAjjGen0pFUCoLuQRpgdWqQILUyzLgYwOM9+P739PXFVJoWhlUNzk5z+Nb9lbC3iBYfMeT/QVXvmUr83rkex/+vT0Qaso5oqPNFMRtBKctuA3mNzj7v5f4k09ank+7+FJbjexVaTccdqydQk6L7itLvWNfffH4fzoe41sJRTaKYj/2Q==",
					  "owner": {
					    "id": "20704880069",
					    "username": "narcecl"
					  },
					  "thumbnail_src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/71704269_145198136763333_3902296489010963509_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=109&oh=247f70cffed24a3077a0907866cbbdea&oe=5E50B76E",
					  "thumbnail_resources": [
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s150x150/71704269_145198136763333_3902296489010963509_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=109&oh=6436bb5ede4e5910393b95365f5ff781&oe=5E4F33A5",
					      "config_width": 150,
					      "config_height": 150
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s240x240/71704269_145198136763333_3902296489010963509_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=109&oh=45c113d4927755ebf48a7bc59e61e74c&oe=5E6975EF",
					      "config_width": 240,
					      "config_height": 240
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s320x320/71704269_145198136763333_3902296489010963509_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=109&oh=e564811a483dd28ed71b4a4ac0c3c2f9&oe=5E87D755",
					      "config_width": 320,
					      "config_height": 320
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s480x480/71704269_145198136763333_3902296489010963509_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=109&oh=f4ac85c20124bdea7d1ce74a29ff18a8&oe=5E69A30F",
					      "config_width": 480,
					      "config_height": 480
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/71704269_145198136763333_3902296489010963509_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=109&oh=247f70cffed24a3077a0907866cbbdea&oe=5E50B76E",
					      "config_width": 640,
					      "config_height": 640
					    }
					  ],
					  "is_video": false,
					  "accessibility_caption": "La imagen puede contener: una o varias personas, primer plano y exterior"
					}
					},
					{
					"node": {
					  "__typename": "GraphSidecar",
					  "id": "2164283224951646013",
					  "edge_media_to_caption": {
					    "edges": [
					      {
					        "node": {
					          "text": "Entre todo lo que ha pasado en el país estas semanas, me voy a dar un espacio para compartir un poco de arte.\n.\n.\n.\n.\n\n#portrait #instachile #portraitvisioncl #highlightscl #rebelarte #zetitafoto #instagood #pursuitofportraits #instagood #portraitpage #aovportraits #folkportraits #moodyports #creative_portraits #portraitgames #portrait_vision #portrait_shots #portraitmood #portraitvisuals"
					        }
					      }
					    ]
					  },
					  "shortcode": "B4JFCBQlGc9",
					  "edge_media_to_comment": {
					    "count": 0
					  },
					  "comments_disabled": false,
					  "taken_at_timestamp": 1572222687,
					  "dimensions": {
					    "height": 1350,
					    "width": 1080
					  },
					  "display_url": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/73243940_2307931182850409_5190384730332640226_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=105&oh=a553344472f8d2a6ea116e9219acd9ce&oe=5E593704",
					  "edge_liked_by": {
					    "count": 39
					  },
					  "edge_media_preview_like": {
					    "count": 141
					  },
					  "location": {
					    "id": "112371848779363",
					    "has_public_page": true,
					    "name": "Santiago, Chile",
					    "slug": "santiago-chile"
					  },
					  "gating_info": null,
					  "fact_check_overall_rating": null,
					  "fact_check_information": null,
					  "media_preview": null,
					  "owner": {
					    "id": "20704880069",
					    "username": "narcecl"
					  },
					  "thumbnail_src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/73243940_2307931182850409_5190384730332640226_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=105&oh=064b5820375bfb5b56330bb8506bdd66&oe=5E8C1613",
					  "thumbnail_resources": [
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s150x150/73243940_2307931182850409_5190384730332640226_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=105&oh=6b114701da9602c084a2605a72fa18f0&oe=5E823C23",
					      "config_width": 150,
					      "config_height": 150
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s240x240/73243940_2307931182850409_5190384730332640226_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=105&oh=7f9d79a88492212140ffa6de40aa03ff&oe=5E712325",
					      "config_width": 240,
					      "config_height": 240
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s320x320/73243940_2307931182850409_5190384730332640226_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=105&oh=eeee4a643e3447598cd86831bdb91cd5&oe=5E88055B",
					      "config_width": 320,
					      "config_height": 320
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s480x480/73243940_2307931182850409_5190384730332640226_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=105&oh=5b68547290ce3e429009a72f68999871&oe=5E53731C",
					      "config_width": 480,
					      "config_height": 480
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/73243940_2307931182850409_5190384730332640226_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=105&oh=064b5820375bfb5b56330bb8506bdd66&oe=5E8C1613",
					      "config_width": 640,
					      "config_height": 640
					    }
					  ],
					  "is_video": false,
					  "accessibility_caption": "La imagen puede contener: una o varias personas"
					}
					},
					{
					"node": {
					  "__typename": "GraphSidecar",
					  "id": "2156300192105926500",
					  "edge_media_to_caption": {
					    "edges": [
					      {
					        "node": {
					          "text": "El cerro Santa Lucia es sin duda uno de los mejores lugares para ir a tomar fotitos, hay una cantidad de lugares y espacios para dejar volar la imaginación.\n.\n.\n.\n.\n\n#portrait #instachile #portraitvisioncl #highlightscl #rebelarte #zetitafoto #instagood #pursuitofportraits #instagood #portraitpage #aovportraits #folkportraits #moodyports #creative_portraits #portraitgames #portrait_vision #portrait_shots #portraitmood #portraitvisuals"
					        }
					      }
					    ]
					  },
					  "shortcode": "B3st5mjlI9k",
					  "edge_media_to_comment": {
					    "count": 0
					  },
					  "comments_disabled": false,
					  "taken_at_timestamp": 1571271035,
					  "dimensions": {
					    "height": 1350,
					    "width": 1080
					  },
					  "display_url": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/70515531_483049515758850_9212670537171435449_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=106&oh=1140085b0272753f1a5c886e3da40ebc&oe=5E552D7D",
					  "edge_liked_by": {
					    "count": 69
					  },
					  "edge_media_preview_like": {
					    "count": 410
					  },
					  "location": {
					    "id": "235307859",
					    "has_public_page": true,
					    "name": "Cerro Santa Lucía",
					    "slug": "cerro-santa-lucia"
					  },
					  "gating_info": null,
					  "fact_check_overall_rating": null,
					  "fact_check_information": null,
					  "media_preview": null,
					  "owner": {
					    "id": "20704880069",
					    "username": "narcecl"
					  },
					  "thumbnail_src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/70515531_483049515758850_9212670537171435449_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=106&oh=e1ed29456f5844af54f209bd25af4746&oe=5E8AE571",
					  "thumbnail_resources": [
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s150x150/70515531_483049515758850_9212670537171435449_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=106&oh=7f33c8cdc097fd62bda6e67f66a829fc&oe=5E5496BA",
					      "config_width": 150,
					      "config_height": 150
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s240x240/70515531_483049515758850_9212670537171435449_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=106&oh=941bf9edf6be9a9178b726f0de6a6090&oe=5E82B7F0",
					      "config_width": 240,
					      "config_height": 240
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s320x320/70515531_483049515758850_9212670537171435449_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=106&oh=c67e2f7970b5de9744662852c90f7c1e&oe=5E6BA94A",
					      "config_width": 320,
					      "config_height": 320
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s480x480/70515531_483049515758850_9212670537171435449_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=106&oh=cb7fbfee271066f77500b91124df67da&oe=5E675210",
					      "config_width": 480,
					      "config_height": 480
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/70515531_483049515758850_9212670537171435449_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=106&oh=e1ed29456f5844af54f209bd25af4746&oe=5E8AE571",
					      "config_width": 640,
					      "config_height": 640
					    }
					  ],
					  "is_video": false,
					  "accessibility_caption": "La imagen puede contener: una o varias personas y exterior"
					}
					},
					{
					"node": {
					  "__typename": "GraphImage",
					  "id": "2153380813076880858",
					  "edge_media_to_caption": {
					    "edges": [
					      {
					        "node": {
					          "text": "Una de las primeras sesiones que hice con la seca @isilora y al día de hoy sigue siendo una de mis fotos favoritas.\n.\n.\n.\n.\n\n#portrait #instachile #portraitvisioncl #highlightscl #rebelarte #zetitafoto #instagood #pursuitofportraits #instagood #portraitpage #aovportraits #folkportraits #moodyports #creative_portraits #portraitgames #portrait_vision #portrait_shots #portraitmood #portraitvisuals"
					        }
					      }
					    ]
					  },
					  "shortcode": "B3iWHC9lt3a",
					  "edge_media_to_comment": {
					    "count": 5
					  },
					  "comments_disabled": false,
					  "taken_at_timestamp": 1570923018,
					  "dimensions": {
					    "height": 1350,
					    "width": 1080
					  },
					  "display_url": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/70403964_529755267801848_6281494363866848449_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=108&oh=f88d7e793c70c24ffc462fd0940a3353&oe=5E5184F8",
					  "edge_liked_by": {
					    "count": 61
					  },
					  "edge_media_preview_like": {
					    "count": 419
					  },
					  "location": {
					    "id": "427386520",
					    "has_public_page": true,
					    "name": "Santiago Metropolitan Region",
					    "slug": "santiago-metropolitan-region"
					  },
					  "gating_info": null,
					  "fact_check_overall_rating": null,
					  "fact_check_information": null,
					  "media_preview": "ACEqsHgA9+etQNCcB+SGwCfTnGT7e/bvT9zdW4AHH9T/AEpxkzbkA4wCM/57Yok2kn3ZnB3nKK2SQ2KQuFAynGRz98AHOB29RnqKljUPAFwGOACCe/17EVkLPv8ALAwCpHt0469vp9a1gypu2/d3E8fQZ/KspXOlJX/P7i7sHqaKz8J6fzorK3qVyjrggr+BH61VkbbAcc8UrxFlJaQcDkDnp2z7+wpojDwkn5Vbof611SXwrt/mY0lbnl3tZddjOfy8YTlsLtPOS2ecdv8APWtCN8Bl/uYB+u0Z/WqgC22XPzN/Aew+vvTLSTAYHqefrUNX9P8Ahtv66mkNH95p+bRVHzPrRU8przGoseM5C/QL196gD5Vi2MEcfhx07VY7/l/7NWTdfd+h/qa03MVor+Ypt/NG3eDjkAgjP0PT2qaC3AG1VDep/wAT0+lTwchvw/kKuJ9xffP8zT2J33Kn2U/3P1H+NFXMUUXA/9k=",
					  "owner": {
					    "id": "20704880069",
					    "username": "narcecl"
					  },
					  "thumbnail_src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/70403964_529755267801848_6281494363866848449_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=108&oh=477ab5efc4f3b294e06fc57bbb308e7e&oe=5E5459F4",
					  "thumbnail_resources": [
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s150x150/70403964_529755267801848_6281494363866848449_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=108&oh=08846e86174cc258645cc8c52dae0213&oe=5E8C253F",
					      "config_width": 150,
					      "config_height": 150
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s240x240/70403964_529755267801848_6281494363866848449_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=108&oh=ff43c7b6e7421fed24fba82062a35b99&oe=5E6A2875",
					      "config_width": 240,
					      "config_height": 240
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s320x320/70403964_529755267801848_6281494363866848449_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=108&oh=7fffd2e495a1661fadb9df187cc9465b&oe=5E548DCF",
					      "config_width": 320,
					      "config_height": 320
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s480x480/70403964_529755267801848_6281494363866848449_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=108&oh=aeef373cb2a2decf7b8a7491528e746d&oe=5E6C3595",
					      "config_width": 480,
					      "config_height": 480
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/70403964_529755267801848_6281494363866848449_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=108&oh=477ab5efc4f3b294e06fc57bbb308e7e&oe=5E5459F4",
					      "config_width": 640,
					      "config_height": 640
					    }
					  ],
					  "is_video": false,
					  "accessibility_caption": "La imagen puede contener: una o varias personas, personas sentadas, calzado y exterior"
					}
					},
					{
					"node": {
					  "__typename": "GraphImage",
					  "id": "2151233480868349989",
					  "edge_media_to_caption": {
					    "edges": [
					      {
					        "node": {
					          "text": "You're too good in your own ways, in others, you're evil like me.\n.\n.\n.\n.\n\n#portrait #instachile #portraitvisioncl #highlightscl #rebelarte #zetitafoto #instagood #pursuitofportraits #instagood #portraitpage #aovportraits #folkportraits #moodyports #creative_portraits #portraitgames #portrait_vision #portrait_shots #portraitmood #portraitvisuals"
					        }
					      }
					    ]
					  },
					  "shortcode": "B3at3QAFcgl",
					  "edge_media_to_comment": {
					    "count": 0
					  },
					  "comments_disabled": false,
					  "taken_at_timestamp": 1570667036,
					  "dimensions": {
					    "height": 1350,
					    "width": 1080
					  },
					  "display_url": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/72222763_164421754709406_1584001705566438526_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=106&oh=a94f4ace8bd634393cf9be776f26669f&oe=5E687D9E",
					  "edge_liked_by": {
					    "count": 51
					  },
					  "edge_media_preview_like": {
					    "count": 367
					  },
					  "location": {
					    "id": "427386520",
					    "has_public_page": true,
					    "name": "Santiago Metropolitan Region",
					    "slug": "santiago-metropolitan-region"
					  },
					  "gating_info": null,
					  "fact_check_overall_rating": null,
					  "fact_check_information": null,
					  "media_preview": "ACEq3Y8VXbUEDCNMM3fnAH8/0FVjNwx/hA/M9qwjOfP3NgjpjHHP07+9S32KS7naI4cZH/6j6U+qFhIHUrzlMA59cf4Yq/TWomrOxXoooqiTmLpJrd9rn5JCSCDkf4jHHFVLSYQy7nXcAef8a2dYYGJT3Vx+RBrAlIVuOnX86m1y0zoLW4EbsVyFc5ycenf8ePpW5HKsgypzXIWz4XPatSzuNvzDvUX5XboW1dX6mpuoqp5lFaGRn6sMxBh/eH4deTUFqseOgdtpALdM9uew/Wr9zzA+eeKzrb7g+lRLY0iRNHLCG80dehHK4+opYn2IuCMnqM8irDE9PWoZUXGcDPrioWpb0JvtFFZ+TRQB/9k=",
					  "owner": {
					    "id": "20704880069",
					    "username": "narcecl"
					  },
					  "thumbnail_src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/72222763_164421754709406_1584001705566438526_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=106&oh=6048d53d29a69d2ed75cf92b52169a9f&oe=5E840D92",
					  "thumbnail_resources": [
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s150x150/72222763_164421754709406_1584001705566438526_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=106&oh=9711ab8453664095ed1f4a83577c13d3&oe=5E888E59",
					      "config_width": 150,
					      "config_height": 150
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s240x240/72222763_164421754709406_1584001705566438526_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=106&oh=17f65f9aac2a9ebd7961f5623b133293&oe=5E89DC13",
					      "config_width": 240,
					      "config_height": 240
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s320x320/72222763_164421754709406_1584001705566438526_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=106&oh=3c26289fcb6cb97e7a920c3d8f8e9ec5&oe=5E5812A9",
					      "config_width": 320,
					      "config_height": 320
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s480x480/72222763_164421754709406_1584001705566438526_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=106&oh=1a45028e7630304eb00cf4b35b9d6492&oe=5E50BDF3",
					      "config_width": 480,
					      "config_height": 480
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/72222763_164421754709406_1584001705566438526_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=106&oh=6048d53d29a69d2ed75cf92b52169a9f&oe=5E840D92",
					      "config_width": 640,
					      "config_height": 640
					    }
					  ],
					  "is_video": false,
					  "accessibility_caption": "La imagen puede contener: una o varias personas, personas sentadas y primer plano"
					}
					},
					{
					"node": {
					  "__typename": "GraphImage",
					  "id": "2149024126798789387",
					  "edge_media_to_caption": {
					    "edges": [
					      {
					        "node": {
					          "text": "But don't you be so cold❄️.\n.\n.\n.\n.\n\n#portrait #instachile #portraitvisioncl #highlightscl #rebelarte #zetitafoto #instagood #pursuitofportraits #instagood #portraitpage #aovportraits #folkportraits #moodyports #creative_portraits #portraitgames #portrait_vision #portrait_shots #portraitmood #portraitvisuals"
					        }
					      }
					    ]
					  },
					  "shortcode": "B3S3g6rlfsL",
					  "edge_media_to_comment": {
					    "count": 3
					  },
					  "comments_disabled": false,
					  "taken_at_timestamp": 1570403661,
					  "dimensions": {
					    "height": 1350,
					    "width": 1080
					  },
					  "display_url": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/72355675_649539645571197_7879899162515126045_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=109&oh=3465ccadd67c87ad0922ac0210683d48&oe=5E4E9E0A",
					  "edge_liked_by": {
					    "count": 37
					  },
					  "edge_media_preview_like": {
					    "count": 339
					  },
					  "location": {
					    "id": "112371848779363",
					    "has_public_page": true,
					    "name": "Santiago, Chile",
					    "slug": "santiago-chile"
					  },
					  "gating_info": null,
					  "fact_check_overall_rating": null,
					  "fact_check_information": null,
					  "media_preview": "ACEqvOTuINSRj+M8AUjDcTxjBp4YRjLHGcAfX296jqXfQimY55NQoTnjnP8AOpJGMxxgqR3PHekiiCk/MAe350WHfox2X9P0NFPwf8migQ/MjNwAFz1J7Vz99cl5flJO08Htx3/E10NxEXiKR8E+/X1GfeuRfK7s8ckH8OKaSKWps6bOZnZXbLYG3Pt1I/z0q3OJEO4/dGOR/UVzVvN5Uqv/AHSM/Tv+ldqMEcdKGkSzG+0e5/KitP7NH/dFFTbzF95OTXKaggSZwOmc+nXn8a6usa9UGQ5APAq1qUtDnDxXWabP5sAz1X5T+HT9KwCoweB0q/ofR/8AgP8AWqkrEp3ub9FFFQB//9k=",
					  "owner": {
					    "id": "20704880069",
					    "username": "narcecl"
					  },
					  "thumbnail_src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/72355675_649539645571197_7879899162515126045_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=109&oh=482aea6a524515b1b4698f490f554bdc&oe=5E6FCC06",
					  "thumbnail_resources": [
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s150x150/72355675_649539645571197_7879899162515126045_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=109&oh=6aab4a7959c5956d026a37f6e1fa5961&oe=5E8CD6CD",
					      "config_width": 150,
					      "config_height": 150
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s240x240/72355675_649539645571197_7879899162515126045_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=109&oh=75ced1db2e5a1ba00c70eeb798dcccd6&oe=5E4A1187",
					      "config_width": 240,
					      "config_height": 240
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s320x320/72355675_649539645571197_7879899162515126045_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=109&oh=e7f46c528763ef9e67ff95ad8fc8ef94&oe=5E70443D",
					      "config_width": 320,
					      "config_height": 320
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s480x480/72355675_649539645571197_7879899162515126045_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=109&oh=be829b9930a449c2423af789c917539b&oe=5E510667",
					      "config_width": 480,
					      "config_height": 480
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/72355675_649539645571197_7879899162515126045_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=109&oh=482aea6a524515b1b4698f490f554bdc&oe=5E6FCC06",
					      "config_width": 640,
					      "config_height": 640
					    }
					  ],
					  "is_video": false,
					  "accessibility_caption": "La imagen puede contener: una o varias personas, personas de pie, niño(a), árbol, sombrero, exterior y primer plano"
					}
					},
					{
					"node": {
					  "__typename": "GraphImage",
					  "id": "2146913972859128133",
					  "edge_media_to_caption": {
					    "edges": [
					      {
					        "node": {
					          "text": "I overthink all my thinking, thinking this way for you.\n.\n.\n.\n.\n\n#portrait #instachile #portraitvisioncl #highlightscl #rebelarte #zetitafoto #instagood #pursuitofportraits #instagood #portraitpage #aovportraits #folkportraits #moodyports #creative_portraits #portraitgames #portrait_vision #portrait_shots #portraitmood #portraitvisuals"
					        }
					      }
					    ]
					  },
					  "shortcode": "B3LXuIrl0lF",
					  "edge_media_to_comment": {
					    "count": 5
					  },
					  "comments_disabled": false,
					  "taken_at_timestamp": 1570152111,
					  "dimensions": {
					    "height": 1350,
					    "width": 1080
					  },
					  "display_url": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/72328973_175756170224784_1656557176560228761_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=100&oh=60b23e21ff234cb8d241b47bb18e3b22&oe=5E4D9CA3",
					  "edge_liked_by": {
					    "count": 36
					  },
					  "edge_media_preview_like": {
					    "count": 306
					  },
					  "location": {
					    "id": "427386520",
					    "has_public_page": true,
					    "name": "Santiago Metropolitan Region",
					    "slug": "santiago-metropolitan-region"
					  },
					  "gating_info": null,
					  "fact_check_overall_rating": null,
					  "fact_check_information": null,
					  "media_preview": "ACEq0AKezmNeF3k9sgfzpoqK6ztG0ZOfXFJ7AtyVLtZG8t1MbnoD3+h6VeA4rNhYSv5T9QAw/P8AmCOo6g81q0o3epTI8Cin0VZJnimzYwN3QGgGo7nO3cCAFyTmpew1uU7STzrxiOPlwPwFbaxOpznPtXKWUjJOHHcn/wCvXWoxcZzikuw33JcGim4b1/SiqJMwGqeoyER7ex6/4f59KsiszU+qfjSYLcj09d0mT/CCa6K3PT3rB07+P/d/xrYh+6tR1LZpUVjb29T+dFamZ//Z",
					  "owner": {
					    "id": "20704880069",
					    "username": "narcecl"
					  },
					  "thumbnail_src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/72328973_175756170224784_1656557176560228761_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=100&oh=83397a42aa04c9ca23dd05c7b3eff057&oe=5E5256AF",
					  "thumbnail_resources": [
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s150x150/72328973_175756170224784_1656557176560228761_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=100&oh=fe70027dca45c0bc8533e76931a2da3d&oe=5E858164",
					      "config_width": 150,
					      "config_height": 150
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s240x240/72328973_175756170224784_1656557176560228761_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=100&oh=b119333c5400799cecbff95cc57db59c&oe=5E69CC2E",
					      "config_width": 240,
					      "config_height": 240
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s320x320/72328973_175756170224784_1656557176560228761_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=100&oh=22191c5d092df4a6d50e3a29e1fc7ebf&oe=5E539294",
					      "config_width": 320,
					      "config_height": 320
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.135.1080.1080a/s480x480/72328973_175756170224784_1656557176560228761_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=100&oh=80d7170f31dbccb347440202d3086c74&oe=5E679CCE",
					      "config_width": 480,
					      "config_height": 480
					    },
					    {
					      "src": "https://instagram.flsc1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/72328973_175756170224784_1656557176560228761_n.jpg?_nc_ht=instagram.flsc1-1.fna.fbcdn.net&_nc_cat=100&oh=83397a42aa04c9ca23dd05c7b3eff057&oe=5E5256AF",
					      "config_width": 640,
					      "config_height": 640
					    }
					  ],
					  "is_video": false,
					  "accessibility_caption": "La imagen puede contener: una o varias personas, gafas y primer plano"
					}
					}
				]
			}
		},
		methods: {
			deletePost: function(index){
				this.$store.commit('deletePost', index);
			},
			changeEvent: function(e){
				console.log( 'change =>', this.$store.getters.getPosts );
			},
			sortEvent: function(e){
				this.$store.commit('updatePosts', e.items);
			}
		},
		created: function(){
			console.log( 'created edges =>', this.edges);
			console.log( 'created =>', this.$store.getters.getPosts );
		},
		mounted: function(){
			this.item_width = this.$refs.cont.offsetWidth / this.items_per_row;
			this.ready = true;
		}
	}
</script>

<style lang="scss" scoped>
	.grid-item{
		cursor:move;
		padding:5px !important;
		width: 100%;
		height: 100%;

		.grid-cont{
			width: 100%;
			height: 100%;
			position: relative;
			overflow: hidden;

			&:hover{
				.delete-item{opacity:1;}
			}

			.delete-item{
				position: absolute;
				right: 10px;
				top: 10px;
				background: rgba(0,0,0,.5);
				z-index: 1;
				padding: 8px;
				color: #fff;
				border-radius: 100%;
				width: 32px;
				height: 32px;
				text-align: center;
				transition: all .3s ease;
				opacity:0;

				&:hover{
					background:rgba(0,0,0,.9);
				}
			}

			img{
				pointer-events: none;
				position: absolute;
				left: -50%;
				top: -50%;
				bottom: -50%;
				right: -50%;
				margin: auto;
			}
		}
	}
</style>