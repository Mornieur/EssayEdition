import { Component, Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import * as S from './styled'
import draftToHtml from "draftjs-to-html";
import { EditorState, RawDraftContentState, convertToRaw, ContentState, convertFromHTML, convertFromRaw, Modifier } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import PropTypes from 'prop-types';

interface IProps {
  setDataToPost: Dispatch<SetStateAction<any>>;
  dataToPost: any;
  post?: any;
  mode: string;
}

const CustomOption : FC<any> = ({ editorState }: any) => {
  const addStar = () => {
    const contentState = Modifier.replaceText(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      '⭐',
      editorState.getCurrentInlineStyle(),
    );
    EditorState.push(editorState, contentState, 'insert-characters');
  };
  return <div onClick={addStar}>⭐</div>;
};

export const TextDraft: FC<IProps> = ({ setDataToPost, dataToPost, post, mode }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  // let parser = new DOMParser();
  // let doc = parser.parseFromString(post, "text/html");
  // let block = htmlToDraft(post);
  const [editorDefaultState, setEditorDefaultState] = useState<
    EditorState | undefined
  >(
    post &&
      EditorState.createWithContent(
        ContentState.createFromBlockArray(
          convertFromHTML(post).contentBlocks
        )
      )
  );

  useEffect(() => {
    if (mode === 'post') {
      setDataToPost({
        ...dataToPost,
        content: draftToHtml(convertToRaw(editorState.getCurrentContent())),
      });
    }
  }, [editorState]);

  useEffect(() => {
    if (editorDefaultState && mode === "put") {
      setDataToPost({
        ...dataToPost,
        content: draftToHtml(
          convertToRaw(editorDefaultState.getCurrentContent())
        ),
      });
    }
  }, [editorDefaultState]);

  const onEditorStateChange = (editorState: any) => {
    if (mode === 'post') {
      setEditorState(editorState);
    }
    if (mode === 'put') {
      setEditorDefaultState(editorState);
    }
  };

  async function uploadCallback(file: any) {
    var formData = new FormData()
    // formData.append('file', file)
    // const url = await API.post(
    //   "/feed/upload",
    //   formData
    // );
    // return new Promise((resolve, reject) => {
    //   resolve({ data: { link: url.data.link } });
    // });
  }

  return (
    <S.Editor className="editor" mode={mode}>
      {mode === 'put' && (
        <Editor
          // editorState={editorDefaultState}
          onEditorStateChange={onEditorStateChange}
          placeholder={'No que você está pensando?'}
          spellCheck={true}
          stripPastedStyles={true}
          defaultEditorState={editorDefaultState}
          // toolbarCustomButtons={[
          //   <CustomOption editorState={editorDefaultState} />,
          // ]}
          toolbar={{
            fontFamily: {
              options: [
                'Arial',
                'Georgia',
                'Impact',
                'Tahoma',
                'Times New Roman',
                'Verdana',
                'Montserrat',
              ],
            },
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            image: {
              uploadEnabled: true,
              previewImage: true,
              uploadCallback: uploadCallback,
              alt: { present: true, mandatory: false },
            },
          }}
          mention={{
            separator: ' ',
            trigger: '@',
          }}
          hashtag={{
            separator: ' ',
            trigger: '#',
          }}
        />
      )}
      {mode === 'post' && (
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          placeholder={'Digite a redação aqui'}
          spellCheck={true}
          stripPastedStyles={true}
          // toolbar={{
          //   fontFamily: {
          //     options: [
          //       "Arial",
          //       "Georgia",
          //       "Impact",
          //       "Tahoma",
          //       "Times New Roman",
          //       "Verdana",
          //       "Montserrat",
          //     ],
          //   },
          //   inline: { inDropdown: true },
          //   list: { inDropdown: true },
          //   textAlign: { inDropdown: true },
          //   link: { inDropdown: true },
          //   history: { inDropdown: true },
          //   image: {
          //     uploadEnabled: true,
          //     previewImage: true,
          //     uploadCallback: uploadCallback,
          //     alt: { present: true, mandatory: false },
          //   },
          // }}
          // mention={{
          //   separator: " ",
          //   trigger: "@",
          //   suggestions: [{ text: "", value: "", url: "" }],
          // }}
          // hashtag={{
          //   separator: " ",
          //   trigger: "#",
          // }}
        />
      )}
    </S.Editor>
  );
};
