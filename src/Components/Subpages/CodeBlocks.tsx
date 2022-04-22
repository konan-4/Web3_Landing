import React, {useState} from "react";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Button, Typography } from "@chainsafe/common-components";
import clsx from "clsx";
import { CopyBlock, atomOneDark } from "react-code-blocks";
import sample from "./snippets";


const useStyles = makeStyles(
  ({ constants, palette, breakpoints }: ITheme) => {
    return createStyles({
      container: {
        display: "flex",
        flexDirection: "column",
        [breakpoints.up(599)]: {
          padding: "2rem",
          flexDirection: "row",
        }
      },
      demo: {
        maxWidth: "100%",
        width: "100%",
        marginBottom: "3rem",
        [breakpoints.up(599)]: {
          maxWidth: "48%",
          "&:nth-of-type(1n)": {
            marginRight: "1rem",
          }
        }
      },
      header: {
        fontWeight: 600,
        color: palette.additional["gray"][4],
        lineHeight: "28px",
      },
      desc: {
        fontSize: "20px",
        lineHeight: "28px",
        maxWidth: "85%",
        color: palette.additional["gray"][7],
      },
      demosWrapper: {
        display: "flex",
        flexDirection: "column",
        [breakpoints.up(599)]: {
          flexDirection: "row",
          flexWrap: "wrap",
        }
      },
    })
  })

const CodeBlocks: React.FC = () => {
  const classes = useStyles();

  const codeCSS = {
    fontSize: "16px", fontWeight: 600, padding: "16px", minHeight: "400px", maxHeight: "400px", overflowWrap: "break-word", overflowY: "scroll", borderRadius: "20px"
  }
  return (
    <div className={classes.container}>
      <div className={classes.demosWrapper}>
        <div className={classes.demo}>
          <CopyBlock
            text={sample["interact"]}
            language="javascript"
            theme={atomOneDark}
            wrapLines={true}
            customStyle={codeCSS}
          />
          <h1 className={classes.header}>Interact with smart contracts.</h1>
          <p className={classes.desc}>Examine recent transfer events by querying or subscribing to their events.</p>
        </div>
        <div className={classes.demo}>
          <CopyBlock
            text={sample["fetch"]}
            language="javascript"
            theme={atomOneDark}
            wrapLines={true}
            customStyle={codeCSS}
            />
            <h1 className={classes.header}>Fetch data from the blockchain.</h1>
            <p className={classes.desc}>Get an Ethereum account balance with a simple query to a node provider via JSON-RPC.</p>
        </div>
        <div className={classes.demo}>
          <CopyBlock
            text={sample["simplify"]}
            language="javascript"
            theme={atomOneDark}
            wrapLines={true}
            customStyle={codeCSS}
            />
            <h1 className={classes.header}>Simplify your code with built-in utilities.</h1>
            <p className={classes.desc}>Calculate the sha3 hash of your input data, convert your Ether values in wei, and more.</p>
        </div>
      </div>
    </div>
  )
}

export default CodeBlocks;