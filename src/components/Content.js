import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-github";
import { Toaster } from "react-hot-toast";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#2014ac' : '#318486',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#e01648",
    '&:hover': {
      backgroundColor: "#ba0b37",
    },
  }));
  
export default function Content({ setQuery, value, setValue, isOpen }) {
    const onChange = (newValue) => {
        setValue(newValue);
    };

    const onSubmit = () => {
        var Z = value.toLowerCase().slice(value.indexOf("from") + "from".length);
        setQuery(Z.split(" ")[1]);
    };
    return (

        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                    success: {
                        duration: 3000,
                        iconTheme: {
                            primary: "#268a0c",
                            secondary: "#ffffff",
                        },
                        style:{
                            fontFamily: "Gilroy-ExtraBold",
                        }
                    },
                    error: {
                        iconTheme: {
                            primary: "#D73737",
                            secondary: "#ffffff",
                        },
                        style:{
                            fontFamily: "Gilroy-ExtraBold",
                        }
                    },
                }}
            />
            <Box sx={{ flexGrow: 1 }}>

                <Grid container spacing={3}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <Item>
                            <ColorButton onClick={onSubmit} startIcon={<PlayCircleOutlineIcon />} 
                                    style={{ marginBottom: "1.5%", fontFamily: "Gilroy-ExtraBold", letterSpacing: ".14rem"}}
                                    variant="contained" 
                            >
                                    
                                Run Query
                            </ColorButton>

                            <AceEditor
                                id="editor"
                                aria-label="editor"
                                mode="mysql"
                                theme="github"
                                name="editor"
                                fontSize={16}
                                minLines={15}
                                maxLines={10}
                                width="100%"
                                showPrintMargin={false}
                                showGutter
                                placeholder="Write your Query here..."
                                editorProps={{ $blockScrolling: true }}
                                setOptions={{
                                    enableBasicAutocompletion: true,
                                    enableLiveAutocompletion: true,
                                    enableSnippets: true,
                                }}
                                value={value}
                                onChange={onChange}
                                showLineNumbers
                            />
                        </Item>
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            </Box>
        </div>
    )
}