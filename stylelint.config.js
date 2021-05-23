module.exports = {
  extends: ["stylelint-config-recommended"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
    "block-no-empty": null,
    "unit-allowed-list": ["em", "rem", "s", "%", "px"],
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["/^v-/", "pseudo-element"],
      },
    ],
  },
};
