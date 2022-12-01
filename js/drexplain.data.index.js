DR_EXPLAIN.namespace( 'DR_EXPLAIN.data_index' );
DR_EXPLAIN.data_index = {

	// index
	DREX_NODE_KEYWORDS: [422,110,172,171,26,208,298,109,449,390,399,111,170,168,400,176,401,1,2,87,22,24,25,218,86,23,27,28,30,31,32,33,34,35,36,37,38,213,40,41,42,43,44,45,46,47,258,48,49,50,51,52,53,55,56,57,58,59,282,60,61,62,63,64,65,66,67,68,69,70,72,73,74,300,75,76,77,78,79,80,81,82,210,83,208,437,438,439,440,441,442,443,379,380,381,382,383,384,385,386,314,71,315,316,317,319,318,450,329,18,375,207,371,373,374,363,364,365,361,372,367,369,368,370,88,126,127,112,206,113,114,115,189,188,116,117,118,119,120,121,122,123,124,125,167,169,395,396,397,398,394,391,392,378,393,389,402,177,403,404,7,8,9,10,11,12,13,14,15,174,173,89,90,96,97,98,99,103,101,222,102,355,100,104,105,209,107,19,20,21,84,85,212,224,225,226,251,253,252,219,39,29,254,255,211,256,257,259,260,261,262,263,264,265,266,199,200,54,268,269,270,271,272,273,274,275,276,277,278,279,280,281,283,284,285,295,296,297,215,299,301,302,303,376,377,387,444,445,446,447,448,4,250,196,216,366,362,474,3,6,194,195,128,175,484,489,485,486,487,488,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,16,231,17,233,193,234,431,236,430,320,321,322,328,323,324,325,326,327,333,330,331,332,91,92,93,94,95,106,221,334,335,336,337,338,339,340,345,343,341,342,346,347,348,349,350,351,352,353,354,201,360,178,357,356,358,181,182,187,359,313,304,305,306,307,308,184,185,186,312,309,310,311,212,214,217,220,432,433,434,435,286,287,288,289,290,436,479,475,476,477,478,480,482,483,5,237,238,239,240,129,130,131,132,133,134,135,136,137,138,139,142,144,141,147,145,140,143,146,152,151,150,148,149,153,154,155,156,157,158,159,160,161,162,163,164,165,166,229,230,388,491,492,493,494,495,496,497,498,499,500,501,502,503,504,232,81,36,235,457,451,452,453,454,455,456,223,458,459,460,461,467,344,183,468,469,470,471,472,473,179,180,227,228,291,293,294,292,481,490,423,424,425,426,427,428,429,267,197,190,192,191,462,463,464,465,466,241,242,198,243,244,245,246,247,202,203,204,205,248,249],
	DREX_NODE_KEYWORDS_START: [0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,4,4,6,6,7,8,9,9,9,9,9,9,9,9,9,9,9,10,10,11,12,13,13,13,14,16,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,20,20,21,21,22,23,24,24,25,26,27,27,28,28,29,30,31,32,33,34,35,36,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,74,75,76,77,78,79,80,81,82,83,84,85,85,85,85,85,85,85,85,86,87,88,89,90,91,92,92,93,94,95,96,97,98,99,99,100,100,101,101,101,102,102,103,104,105,106,108,109,110,110,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,112,112,112,112,112,112,112,112,112,112,112,112,112,112,112,112,112,112,112,112,112,112,112,112,112,113,114,115,116,117,118,118,118,119,120,121,121,122,123,123,123,123,123,123,123,124,124,124,125,125,125,126,126,127,128,129,130,131,132,133,133,134,135,136,137,137,138,139,140,141,142,143,144,144,144,144,145,146,146,146,146,150,150,151,152,153,154,155,156,156,156,157,158,158,159,160,161,162,163,164,165,165,166,167,168,169,170,171,172,173,173,173,174,175,176,177,178,180,180,181,181,181,182,183,184,185,186,186,186,187,188,189,190,191,193,193,196,197,197,198,199,199,199,199,199,199,199,199,199,199,199,200,200,200,200,200,201,202,202,202,202,202,202,202,203,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,205,205,205,205,205,205,205,205,205,205,205,205,205,205,206,207,207,207,207,207,207,207,208,209,210,211,212,213,214,214,214,214,214,214,215,217,217,218,218,219,220,221,222,223,224,225,226,227,228,229,230,231,231,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,233,234,234,234,234,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,236,237,238,238,239,240,240,240,241,241,241,242,242,242,242,242,242,243,243,243,243,243,243,244,245,245,245,245,245,245,245,245,245,245,245,246,246,248,249,250,251,251,251,252,252,254,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,257,257,257,257,257,258,258,258,258,258,259,262,262,262,262,262,262,262,262,262,263,263,263,263,264,264,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,287,287,287,287,287,288,289,290,290,292,293,294,295,296,296,297,298,299,300,301,303,304,305,305,305,306,307,308,309,310,310,311,312,313,314,315,315,315,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,331,332,333,334,335,336,337,337,337,337,337,337,337,337,337,337,338,339,340,341,342,345,346,346,346,346,346,347,348,349,349,350,351,352,355,356,357,358,359,359,359,360,361,362,362,362,362,362,362,362,362,362,362,362,363,363,363,363,363,363,363,363,363,363,363,363,364,365,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,367,367,367,367,367,367,367,367,368,369,370,371,372,372,372,372,372,372,372,372,372,373,373,373,373,373,373,373,374,375,376,377,378,379,380,380,381,382,383,384,385,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,387,388,389,390,391,392,392,393,394,395,396,397,398,399,400,401,402,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,421,421,421,422,423,424,426,426,426,426,426,426,426,426,426,426,426,426,426,426,426,426,426,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,441,441,441,441,441,441,441,441,441,441,444,444,444,444,444,444,444,444,444,444,444,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,446,447,448,449,453,454,455,456,457,457,457,458,458,459,459,460,461,462,463,464,465,466,468,468,468,468,468,468,468,468,468,468,470,470,470,470,470,470,470,470,470,470,470,470,470,470,471,472,473,474,474,475,476,476,476,476,476,476,476,476,476,476,476,477,478,479,480,481,482,483,483,483,483,483,483,483,483,484,484,484,484,484,484,484,485,486,486,486,486,486,486,486,486,486,486,486,486,488,488,488,488,488,488,488,488,488,488,489,490,491,491,492,493,493,493,493,493,493,493,493,493,494,496,497,498,499,500,505,506,507,507,507,507,507,507,507,507], //length:= drex.nodes_count,
	DREX_NODE_KEYWORDS_END: [0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,4,4,6,6,7,8,9,9,9,9,9,9,9,9,9,9,9,10,10,11,12,13,13,13,14,16,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,20,20,21,21,22,23,24,24,25,26,27,27,28,28,29,30,31,32,33,34,35,36,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,74,75,76,77,78,79,80,81,82,83,84,85,85,85,85,85,85,85,85,86,87,88,89,90,91,92,92,93,94,95,96,97,98,99,99,100,100,101,101,101,102,102,103,104,105,106,108,109,110,110,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,112,112,112,112,112,112,112,112,112,112,112,112,112,112,112,112,112,112,112,112,112,112,112,112,112,113,114,115,116,117,118,118,118,119,120,121,121,122,123,123,123,123,123,123,123,124,124,124,125,125,125,126,126,127,128,129,130,131,132,133,133,134,135,136,137,137,138,139,140,141,142,143,144,144,144,144,145,146,146,146,146,150,150,151,152,153,154,155,156,156,156,157,158,158,159,160,161,162,163,164,165,165,166,167,168,169,170,171,172,173,173,173,174,175,176,177,178,180,180,181,181,181,182,183,184,185,186,186,186,187,188,189,190,191,193,193,196,197,197,198,199,199,199,199,199,199,199,199,199,199,199,200,200,200,200,200,201,202,202,202,202,202,202,202,203,204,204,204,204,204,204,204,204,204,204,204,204,204,204,204,205,205,205,205,205,205,205,205,205,205,205,205,205,205,206,207,207,207,207,207,207,207,208,209,210,211,212,213,214,214,214,214,214,214,215,217,217,218,218,219,220,221,222,223,224,225,226,227,228,229,230,231,231,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,233,234,234,234,234,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,235,236,237,238,238,239,240,240,240,241,241,241,242,242,242,242,242,242,243,243,243,243,243,243,244,245,245,245,245,245,245,245,245,245,245,245,246,246,248,249,250,251,251,251,252,252,254,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,257,257,257,257,257,258,258,258,258,258,259,262,262,262,262,262,262,262,262,262,263,263,263,263,264,264,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,287,287,287,287,287,288,289,290,290,292,293,294,295,296,296,297,298,299,300,301,303,304,305,305,305,306,307,308,309,310,310,311,312,313,314,315,315,315,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,331,332,333,334,335,336,337,337,337,337,337,337,337,337,337,337,338,339,340,341,342,345,346,346,346,346,346,347,348,349,349,350,351,352,355,356,357,358,359,359,359,360,361,362,362,362,362,362,362,362,362,362,362,362,363,363,363,363,363,363,363,363,363,363,363,363,364,365,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,366,367,367,367,367,367,367,367,367,368,369,370,371,372,372,372,372,372,372,372,372,372,373,373,373,373,373,373,373,374,375,376,377,378,379,380,380,381,382,383,384,385,386,386,386,386,386,386,386,386,386,386,386,386,386,386,386,387,388,389,390,391,392,392,393,394,395,396,397,398,399,400,401,402,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,421,421,421,422,423,424,426,426,426,426,426,426,426,426,426,426,426,426,426,426,426,426,426,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,441,441,441,441,441,441,441,441,441,441,444,444,444,444,444,444,444,444,444,444,444,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,445,446,447,448,449,453,454,455,456,457,457,457,458,458,459,459,460,461,462,463,464,465,466,468,468,468,468,468,468,468,468,468,468,470,470,470,470,470,470,470,470,470,470,470,470,470,470,471,472,473,474,474,475,476,476,476,476,476,476,476,476,476,476,476,477,478,479,480,481,482,483,483,483,483,483,483,483,483,484,484,484,484,484,484,484,485,486,486,486,486,486,486,486,486,486,486,486,486,488,488,488,488,488,488,488,488,488,488,489,490,491,491,492,493,493,493,493,493,493,493,493,493,494,496,497,498,499,500,505,506,507,507,507,507,507,507,507,507,507], //length:= drex.nodes_count,

	DREX_KEYWORD_NAMES: ["<NEW KEYWORD>","NiFooter","niHeader","Blender","nifscope style.qss","nifscope issues","links on plugins","3ds MAX ver 3","3ds MAX ver 4","3ds MAX ver 5","3ds MAX ver 6","3ds MAX ver 2009","about nif exporters","TESexporter NIF plugin","FFE exporter NIF plugin","NIFTOOLS exporter NIF plugin","Few issues on export animation","Tes shader material","NifScope Menu","About Nif file","About xNif file","About Kf file","About ninode","About nitrishape","About contollers of animation","About Effects","CORE OF NOTES","Garbage properties","AvoidNode","NiAlphaAccumulator","NiAlphaController","NiAlphaProperty","NiBillboardNode","NiBltSource","NiBone","NiBSAnimationManager","NiBSAnimationNode","NiBSPNode","NiCamera","NiClusterAccumulator","NiCollisionSwitch","NiDitherProperty","NiFlipController","NiFloatData","NiFltAnimationNode","NiFogProperty","NiGeomMorpherCotroller","NiKeyframeController","niLight","NiLines","NiLODNode","NiLookAtController","NiMaterialProperty","NiNode","Velocity","NiParticle","NiPathController","NiPosData","NiRenderedCubeMap","NiRenderedTexture","NiRollController","NiScreenPolygon","NiSequenceStreamHelper","NiShadeProperty","NiSkinInstance","NiSortAdjustNode","NiSpecularProperty","NiStencilProperty","NiStringExtraData","NiSwitchNode","NiTextKeyExtraData","Text strings of animation","NiTextureEffect","NiTexturingProperty","NiTriShape","NiTriStrips","NiUVController","NiVertexColorProperty","NiVertWeightsExtraData","NiVisController","NiWireframeProperty","NiZBufferProperty","RootCollisionNode","BSMirroredNode","Unique types of nodes","Special names on nodes","Extra String","Nif file general notion","About NIF optimizations ","Animations","Vertex Paint ","Texture baking","Multy UV set via MAX","Dual-layer meshes","About new buildings set","MeshSmooth","Texture&materials animations","Light in MAX","Particles creation","Complex animation controllers","Create LOD via MAX","Create billboard via MAX","Create RootCollison via MAX","Create AvoidNode via MAX","Create Shadow via MAX","Create Z-buffer via MAX","Detriangulator (plug for MAX)","Skining in MAX","Nifscope","2d Editor","TES CS","Morrowind.ini","3D-Coat","CrazyBump","DXripper","FaceGen","mudbox","Rad Video Tools","screenshot creator","TopoGun","particleIllusion","PixPaint","Unfold3D ","XnView","ZBrush","Nif editing via Notpad","List of tools for modding","List of tutorials for modding","A bit words on some utilities for modding","BSAReg","BSAPACK","BSAUnpacker","BSA Browser","BSA Registration Utility","BSA Extractors","BSA Manager","BSAReader","Enchanted Editor","MWedit","TES Advanced Mod Editor","Landscape Creator","CellToNif","AcsDungeonGenerator","TES Bookmaker","Animation Kit","GenMod","TESfaith","Gen utilities","Morrowind Enhanced MWE","MWSE","MGE&MGExe","FPS Optimizer","AutoMW","escog","TESMU","TESPCD","TESDTK","TESTool","TESFILES","TESRename","TESRESPEC","Mod Info","Mlox","Wrye Mash","tes3cmd","Pyffi","HEX editors","ripgrep","SceneImmerse Viewer","Reshacker","MCP","About terminology","Respect and permission","Export from 3d MAX","Import to 3d MAX","For fast testing in game","Warning.txt ","CELL TOP MRK","Skining how to create","IK animation without FBX","Nif version 4.2","Physique","Character Studio","Color controller for a Lights","DUMMY01","Magick Shields","Magick Hits","BHV animation","MeshLab","ivygen","IFL","APP_TIME","APP_INIT.","Netimmerse (FFE) export","Niftools Plugins Links","Nifskope links","Nifskope Fast retexturing","Statics_vs_activators(animation_issue)","Combine Shapes"," m_fShine"," m_spec","Orientation constraint in animation","Update Centr/Radius","Flip UV","Flip Faces ","Flip Normals","Morrowind Texture Atlas Creator","Particles from Scratch","TES3ObjectExtraData","Blob animation + niFltAnimNode","BrickNiExtraData","NiCamera settings","ROOT BONE","CAMERA (niNode) sys name","MRT","Geometry Instancing","nifskope hotkeys","Mob Bound","Collision detection","ABV Proxy Types","The Triangle / TriShape Ratio","Cloning and Instancing with 3ds Max","Billboard Eyes with texture effect It\'s will more effective way","Billboard Eyes with additional shape less effective way","Clipping & Culling","Transform-Rate, Fill-Rate, and How Many Triangles","Triangle/NiTriShape Ratios","shadow volume ака теневой объем","shadow how it\'s work in Game","pukcab.bak","AutoSave.bak","about export via TESexporter","Extra Properties ","Export via FFE","Netimmerse Shader","FFE extra properties","Export via NIFTOOLS","file","View","Render","Spell","Transform","Optimize","File Offset","Flags","Block","Node","Mesh","Texture ","Edit UV","Favourites","general property","unnecessary keyframe controller","Types of keys","Phavorite flags of alpha","Example of Alpha work","NiMorphData","NiKeyframeData","NiKeyframeManager","NiAmbientLight","NiDirectionalLight","NiSpotLight","NiPointLight","NiLightColorController","Examples of Lights Working","NiLinesData","NiMaterialColorController","Ambient and diffuse ","NiAutoNormalParticles","NiRotatingParticles","NiBSPArrayController","NiBSParticleNode","NiParticleColorModifier","NiParticleGrowFade","NiParticleSystemController","NiParticleBomb","NiGravity","NiPlanarCollider","NiSphericalCollider","NiParticles","Emitter","Particle at whole","NiRendererSpecificProperty","NiSkinData","NiSkinPartition","About Sorting","Texture Filtering","Texture Clamping","Texture Type","Coordinate Type ","Clipped Plane","EFFECT_ENVIRONMENT_MAP","EFFECT_FOG_MAP","EFFECT_PROJECTED_LIGHT","EFFECT_PROJECTED_SHADOW ","NiSourceCubeMap","NiSourceTexture","NiPixelData","Multi-Textures","NiTriShapeData","NiTriShapeDynamicData","NiTriStripsData","NiUVData","NiVisData","ArrowBone","AttachLight ","BoneOffset","Bounding Box","Body part names","Shadow ","Shield Bone","Weapon Bone","tri EditorMarker","About prefix TRI","List of animation groups MW","make Additional anim to NPC","make Walk Animation","Add Note Track","Sync with Base Animation","Add keys","Morpher animation","Reactor","Flex","CAT","FBX export import","Animation with FBX","available animation controllers","Creation Loop Constant PingPong","Animation with Attach KF files","Nifskope all about","Vertex color with Lights","Vertex color alpha","Vertex color as Texture","About Vertex Paint as general","Create Flip animations","Create UV animations","Create Material Color animations","Create material opacity animation","Create simple Environment effect","Use displacement map","Create packed texture","Light as texture","Light as vertex color","Create a dark map","Settings for the Lights ","Light in general","Particles in general","Forces","Color changing","Environment effect on particles","LookAt creation","Roll creation","Path creation","IK chain","Wire Parameters","Create Invisible","Skin Wrap for creatures","Skin Wrap","About gaps in the shell","Skin&Morph","Skin in general","TextreEffect edit","Create a fake mirrors","Working with LOD","RootCollisionNode edit","Shadow edit","Copy Paste controllers","Copy Paste the objects","Portals creation","Create gaps on landscape","Textures packing","How to insert controllers","Making rotated thrown weapons","Add Velocity","Add light effects","Nifscope errors short list","About DDS","TGA","Note about Splash Screens","Create Detail map","Create Dark map","Create Gloss map","Create Glow map","Create Bump Map","Create Decal Map","Create Alpha channel","Note about PBR Shaders","Create Mask for textures","A bit about scripts","About Cell Buffer and RAM","List of Hot Keys","Collision between","About the Blue color bug","About sound files","About BSA","A variety notes about work in CS","pukcab.bak","AutoSave.bak","Optimisation of game start","Console commands","Short list of Error description","Model summary lists","angel.ini","Working ver of MW.ini","Section in MW.ini","Editor","Inventory","MenuStates","Map","Fonts","Blood","Moons","Cursors","PreLoad","LevelUp","CopyProtectionSettings","Moves","Question","Rules","GeneralWarnings","Archives","Game Files","root of articles","Mod Prepare","Mod Text Merger","Mod Text Importer","Change header","Files scanning","Files optimisation","Cell2Nif","Niftools shader","Import via Niftools","NiAutoNormalParticlesData","NiRotatingParticlesData","NiParticleRotation","NiParticlesData","NiPalette","Base texture","Dark texture","Detail texture","Gloss texture","Glow texture","Bump texture","Decal texture","IDLE animation","Inventory animation","Hit&Dead animation","Animation of movement","Weapons animation","various notes about animations","Weapon Sync","Bow Crossbow","New targets with SimCloth","Explosives creation","Head animation","Billboard Eyes","Facegen heads animation","Working with Morphing","Create a complex target for Morphs","Work&Optimisation","About Reactor\'s settings","About Reactor\'s constraints","Destroy of Skeleton","Create cloth animations","Create whip animation ","Reactor for creature animations","Cloak creation","Flexible shell animation","Spray","Super Spray","Parray","Snow","Bizzard","Pcloud","Example of work with CopyPaste","DXT5_NM","4.4.4.4 RGB","Alpha Channel in DDS","Artefacts of Compression","About versions of DDS plugs","Mip-levels","Changing of Mip-levels","CUBEMAP","Fix for TGA","General","LightAttenuation","Water","PixelWater","Weather","Perfomance settings","How to create CUBEMAP","For Tes Cs","for Xbox","Add new Things","Weather on Water","Weather Clear","Weather Cloudy","Weather Foggy","Weather Overcast","Weather Rain","Weather Thunderstorm","Weather Ashstorm","Weather Blight","Weather Snow","Weather Blizzard"],
	DREX_KEYWORD_CHILD_START: [1,231,231,231,231,231,231,231,231,231,231,231,231,231,233,236,237,237,237,251,251,251,251,251,251,254,254,254,254,254,254,254,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,257,259,265,266,266,266,268,268,268,282,282,282,282,283,283,283,283,283,285,286,286,286,286,286,286,286,295,299,301,302,303,303,303,304,304,304,304,304,304,314,314,314,314,330,334,334,334,334,334,334,341,346,350,356,356,356,356,356,356,356,356,361,376,388,402,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,426,426,426,426,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,433,435,435,435,435,435,435,435,435,435,435,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,437,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,450,450,450,450,451,451,459,467,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,475,475,475,475,475,475,475,475,475,483,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,491,491,494,494,495,495,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505],
	DREX_KEYWORD_CHILD_END: [231,231,231,231,231,231,231,231,231,231,231,231,231,233,236,237,237,237,251,251,251,251,251,251,254,254,254,254,254,254,254,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,257,259,265,266,266,266,268,268,268,282,282,282,282,283,283,283,283,283,285,286,286,286,286,286,286,286,295,299,301,302,303,303,303,304,304,304,304,304,304,314,314,314,314,330,334,334,334,334,334,334,341,346,350,356,356,356,356,356,356,356,356,361,376,388,402,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,423,426,426,426,426,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,432,433,435,435,435,435,435,435,435,435,435,435,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,436,437,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,450,450,450,450,451,451,459,467,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,468,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,474,475,475,475,475,475,475,475,475,475,483,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,484,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,491,491,494,494,495,495,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505,505]
	
};