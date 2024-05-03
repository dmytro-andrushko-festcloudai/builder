import type { Editor } from "grapesjs";
import { RequiredPluginOptions } from ".";

export default (editor: Editor, opts: RequiredPluginOptions) => {
  const { Components } = editor;
  const { id, label } = opts;

  const heroPrf = opts.classPrefix;
  const idContainer = `${id}-container`;
  const idNavMenu = `${id}-nav-menu`;

  const idAboutBlock1 = `${id}-about-block-1`;
  const idAboutBlock = `${id}-about-block`;
  const idAboutText = `${id}-about-text`;

  Components.addType(id, {
    model: {
      defaults: {
        droppable: false,
        name: label,
        attributes: { class: heroPrf },
        components: { type: idContainer },
        styles:
          (opts.style ||
            `
          .${heroPrf} {
            color: #ddd;
            min-height: 600px;
            width: 100%;
            display:flex;
            align-items:center;
            background-color: #f7edd8;
          }

          .${heroPrf}-container {
            max-width: 950px;
            margin: 0 auto;
            width: 95%;
            text-align:center;
            display: flex;
          }

          .${heroPrf}-about-text {
            color: black;
            font-size: 20px;
            line-height: 1.3;
            display:block;
          }

          .${heroPrf}-half-block {
            flex: 1 0 50%;
            padding: 20px;
          }

          .${heroPrf}-half-block-1 {
            flex: 1 0 50%;
            background-image: url(https://content.sfstandard.com/wp-content/uploads/2022/06/BlockFolo_FEATURED.jpg);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }
          
        `) + opts.styleAdditional,
      },
    },
  });

  Components.addType(idContainer, {
    model: {
      defaults: {
        attributes: { class: `${heroPrf}-container`, "data-gjs": "navbar" },
        name: "Navbar Container",
        droppable: false,
        draggable: false,
        removable: false,
        copyable: false,
        highlightable: false,
        components: [
          { type: idAboutBlock1 },
          {
            type: idAboutBlock,
            components: [
              {
                type: idAboutText,
                content:
                  "Block, Inc. (formerly Square, Inc.) is a U.S. listed company founded by Jack Dorsey and Jim McKelvey in 2009. It is a financial technology conglomerate. The company reportedly serves 56 million users and 4 million businesses, and processes payments worth US$228 billion annually as of 2023.",
              },
            ],
          },
        ],
      },
    },
  });

  Components.addType(idAboutBlock1, {
    model: {
      defaults: {
        tagName: "div",
        name: "Block",
        draggable: `[data-gjs-type="${idNavMenu}"]`,
        attributes: { class: `${heroPrf}-half-block-1` },
      },
    },
  });
  Components.addType(idAboutBlock, {
    model: {
      defaults: {
        tagName: "div",
        name: "Block",
        draggable: `[data-gjs-type="${idNavMenu}"]`,
        attributes: { class: `${heroPrf}-half-block` },
      },
    },
  });

  Components.addType(idAboutText, {
    extend: "text",
    model: {
      defaults: {
        tagName: "p",
        name: "About text",
        draggable: `[data-gjs-type="${idNavMenu}"]`,
        attributes: { class: `${heroPrf}-about-text` },
      },
    },
  });
};
