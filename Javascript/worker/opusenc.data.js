OpusHead                                                                                                                                                                                                                                            opusenc %s %s (using %s)
       opus-tools      0.1.9-10-ga4bd67e-dirty Copyright (C) 2008-2013 Xiph.Org Foundation
    Usage: opusenc [options] input_file output_file.opus
   
       Encodes input_file using Opus.
 It can read the WAV, AIFF, FLAC, Ogg/FLAC, or raw files.
       
General options:
       -h, --help         This help
   -V, --version      Version information
         --quiet            Quiet mode
 input_file can be:
       filename.wav      file
         -                 stdin
      output_file can be:
      filename.opus     compressed file
      -                 stdout
     
Encoding options:
      --bitrate n.nnn    Target bitrate in kbit/sec (6-256/channel)
  --vbr              Use variable bitrate encoding (default)
     --cvbr             Use constrained variable bitrate encoding
   --hard-cbr         Use hard constant bitrate encoding
  --comp n           Encoding complexity (0-10, default: 10 (slowest))
   --framesize n      Maximum frame size in milliseconds
                       (2.5, 5, 10, 20, 40, 60, default: 20)
     --expect-loss      Percentage packet loss to expect (default: 0)
       --downmix-mono     Downmix to mono
     --downmix-stereo   Downmix to stereo (if >2 channels)
  --max-delay n      Maximum container delay in milliseconds
                          (0-1000, default: 1000)
  
Diagnostic options:
    --serial n         Forces a specific stream serial number
      --save-range file  Saves check values for every frame to a file
        --set-ctl-int x=y  Pass the encoder control x with value y (advanced)
                       Preface with s: to direct the ctl to multistream s
                             This may be used multiple times
  
Metadata options:
      --comment          Add the given string as an extra comment
    --artist           Author of this track
        --title            Title for this track
        --album            Album or collection this track belongs to
   --date             Date for this track
         --genre            Genre for this track
        --picture          Album art for this track
                         More than one --picture option can be specified.
                       Either a FILENAME for the picture file or a more
                       complete SPECIFICATION form can be used. The
                           SPECIFICATION is a string whose parts are
                              separated by | (pipe) characters. Some parts may
                       be left empty to invoke default values. A
                              FILENAME is just shorthand for "||||FILENAME".
                         The format of SPECIFICATION is
                         [TYPE]|[MIME-TYPE]|[DESCRIPTION]|[WIDTHxHEIGHT
                         xDEPTH[/COLORS]]|FILENAME
                              TYPE is an optional number from one of:
                        0: Other
                       1: 32x32 pixel 'file icon' (PNG only)
                          2: Other file icon
                             3: Cover (front)
                       4: Cover (back)
                        5: Leaflet page
                        6: Media (e.g., label side of a CD)
                            7: Lead artist/lead performer/soloist
                          8: Artist/performer
                            9: Conductor
                           10: Band/Orchestra
                             11: Composer
                           12: Lyricist/text writer
                       13: Recording location
                         14: During recording
                           15: During performance
                         16: Movie/video screen capture
                         17: A bright colored fish
                              18: Illustration
                       19: Band/artist logotype
                       20: Publisher/studio logotype
                          The default is 3 (front cover). There may only be
                              one picture each of type 1 and 2 in a file.
                            MIME-TYPE is optional. If left blank, it will be
                       detected from the file. For best compatibility
                         with players, use pictures with a MIME-TYPE of
                         image/jpeg or image/png. The MIME-TYPE can also
                        be --> to mean that FILENAME is actually a URL to
                              an image, though this use is discouraged. The
                          file at the URL will not be fetched. The URL
                           itself is stored in the metadata.
                              DESCRIPTION is optional. The default is an empty
                       string.
                        The next part specifies the resolution and color
                       information. If the MIME-TYPE is image/jpeg,
                           image/png, or image/gif, you can usually leave
                         this empty and they can be detected from the
                           file. Otherwise, you must specify the width in
                         pixels, height in pixels, and color depth in
                           bits-per-pixel. If the image has indexed colors
                        you should also specify the number of colors
                           used. If possible, these are checked against the
                       file for accuracy.
                             FILENAME is the path to the picture file to be
                         imported, or the URL if the MIME-TYPE is -->.
     --padding n        Extra bytes to reserve for metadata (default: 512)
  --discard-comments Don't keep metadata when transcoding
        --discard-pictures Don't keep pictures when transcoding
       
Input options:
         --raw              Raw input
   --raw-bits n       Set bits/sample for raw input (default: 16)
         --raw-rate n       Set sampling rate for raw input (default: 48000)
    --raw-chan n       Set number of channels for raw input (default: 2)
   --raw-endianness n 1 for bigendian, 0 for little (defaults to 0)
       --ignorelength     Always ignore the datalength in Wave headers
                     @  H  raw     RAW file reader quiet   bitrate hard-cbr        vbr     cvbr    comp    complexity      framesize       expect-loss     downmix-mono    downmix-stereo  no-downmix      max-delay       serial  save-range      set-ctl-int     help    raw-bits        raw-rate        raw-chan        raw-endianness  ignorelength    rate    version version-short   comment artist  title   album   date    genre   picture padding discard-comments        discard-pictures        X              `             h              x              �              �             �             �             �             �              �              �              �                                                     (              @              0             @             P             `             p              �             �              �              �             �             �             �             �             �             �             �             �              �                              opus-tools/opusenc https://blog.rillke.com/opusenc.js/ from %s %s       ENCODER hV      Invalid bit-depth: %s
  --raw-bits must be one of 8,16, or 24
  Invalid expect-loss: %s
        Expected loss is a percent and must be 0-100.
  Invalid complexity: %s
 Complexity must be 0-10.
       2.5     5       10      20      40      60      Invalid framesize: %s
  Framesize must be 2.5, 5, 10, 20, 40, or 60.
   Invalid max-delay: %s
  max-delay 0-1000 ms.
   Invalid set-ctl-int: %s
        Syntax is --set-ctl-int intX=intY or
   Syntax is --set-ctl-int intS:intX=intY
 libopus set CTL values are even.
       Memory allocation failure.
     w       Could not open save-range file: %s
     Must provide a writable file name.
     Invalid comment: %s
    Comments must be of the form name=value
        Error parsing picture option: %s
       METADATA_BLOCK_PICTURE  %s--%s                   %s     ENCODER_OPTIONS -       rb      Error parsing input file: %s
   Error parsing input file: %s unhandled sampling rate: %ld hz
   Error parsing input file: %s unhandled number of channels: %d
  Notice: Surround bitrate less than 16kbit/sec/channel, downmixing.
     Notice: Using resampling with complexity<10.
   Opusenc is fastest with 48, 24, 16, 12, or 8kHz input.

        Error cannot create encoder: %s
        Error allocating packet buffer.
        Error: Bitrate %d bits/sec is insane.
Did you mistake bits for kilobits?
       --bitrate values from 6-256 kbit/sec per channel are meaningful.
       Error OPUS_SET_BITRATE returned: %s
    Error OPUS_SET_VBR returned: %s
        Error OPUS_SET_VBR_CONSTRAINT returned: %s
     Error OPUS_SET_COMPLEXITY returned: %s
 Error OPUS_SET_PACKET_LOSS_PERC returned: %s
   Warning OPUS_SET_LSB_DEPTH returned: %s
        Error opus_multistream_encoder_ctl(st,%d,%d) returned: %s
      Error opus_encoder_ctl(st[%d],%d,%d) returned: %s
      Error --set-ctl-int target stream %d is higher than the maximum stream number %d.
      Error OPUS_GET_LOOKAHEAD returned: %s
  Encoding using %s        (VoIP)
         (audio)
        (low-delay)
    (unknown)
     -----------------------------------------------------
     Input: %0.6gkHz %d channel%s
        s         Output: %d channel%s (        %d coupled      %s%d uncoupled  ,       )
          %0.2gms packets, %0.6gkbit/sec%s
    CBR     CVBR    VBR     Preskip: %d
            Writing final range file %s
   wb+     Error: stream init failed
      Error: failed writing header to output stream
  Error: couldn't allocate sample buffer.
        Encoding failed: %s. Aborting.
 Error: failed writing data to output stream
    |/-\           [%c] %02d%%    [%c]   %02d:%02d:%02d.%02d %4.3gx realtime, %5.4gkbit/s        %s      Encoding complete                                    
         Encoded: 
       Runtime:        
                (%0.4gx realtime)
              Wrote: %lld bytes, %d packets, %lld pages
            Bitrate: %0.6gkbit/s (without overhead)
  Instant rates: %0.6gkbit/s to %0.6gkbit/s
                (%d to %d bytes per packet)
       Overhead: %0.3g%% (container+metadata)
   realloc failed in comment_add()
        realloc failed in comment_pad()
        malloc failed in comment_init()
        OpusTags         %lld hour%s%s   and    %s%lld minute%s%s       , and    %0.4g second%s ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/����    JFIF    �PNG

        GIF87a  GIF89a  IHDR    PLTE    rb      invalid picture type    only one picture of type 1 (32x32 icon) allowed only one picture of type 2 (icon) allowed       |       invalid picture specification: not enough fields        invalid characters in mime type -->     invalid picture specification: can't parse resolution/color field       error opening picture file      insufficient memory     error reading picture file      file too large  image/jpeg      image/png       image/gif       unable to guess MIME type from file, must set it explicitly     invalid picture specification: resolution/color field does not match file       pictures of type 1 MUST be 32x32 PNGs   Success.        Memory allocation failed.       Bad resampler state.    Invalid argument.       Input and output buffers overlap.       Unknown error. Bad error code or strange version mismatch.            �zT?�(\?�.        ��Y?�Ga?�.         ��a?��h?�.  0      �e?��j? /  @      ��k?ףp? /  P      1l?ףp?/  `      ףp?��q?/  �      33s?33s?/  �      ��u?��u?/  �       ��w?��w?/         ��y?��y?/      x3      X2      81      /  @   �Q҄��?      �?�Q҄��?���)��?����2��?���J�?~��n[��?a�?��k�?��%u��?jo�<>�?��5�`��?w$E.��?�~���?:п4w�?�%#��/�?�@C�=;�?S��=�?��y9�?L�� �/�?θx�l"�?��Z�?/�1��?c��2��?MZ�r���?͏d�5��?�7���?���=��?`3
����?�����?J�g�*�?��<`s�?��472��?��z����?�'x*��?�H��y��?��[#G�?=WB��?��@��?M����6�?.&8�s�?f�
��?�T�y�?bHN&n�?�����?�� ���?��AE���?>x/�X	�?��G�ݟ?l�M9v�?�����ɕ?��yǑ?Ul���?���(���?<���~%�?����TN|?gTw��u?�;up?t���oh?��� ��a?�R���#Y??���y@Q?�B ���F?{��S>�<?&Q�"��0?�Tn`z!?}�7 �?�h㈵��>        ����"��?      �?����"��?��{i�?DF�xװ�?&SÆ���?3�.]V{�?��9�?��q!�o�?r�
��?��i�i��?������?9� �J��?���	�?Uj�2BM�?C]�����?Z���>�?��C�?�g7#A�?��z����?�H��L�?t�'�7�?�a��"o�?;NU� ��?�a.��W�?$3�*"y�?�im�̂�?",to��?>�ٌ�?]�_��2�?P��t?��*�e?���R?ʚ�mF7?                �SL���?      �?�SL���?�BȚ��?m���?�-y<-�?�M��1�?������?̙f��?�y,�u=�?Q�"�V��?�6�M��?u���M�?w �ދ��?��D��?� ���2�?S>U���?�a�?��?�j៌�?n$})��?Z�y�C	�? `+W.�?Q�k���?��Z����?��)^~
�?���o.�?�L 8�?ʽD��/�?���x�?K�S�yC�?�ϟ��? n7=���?�iF͙u?�����(c?����Mb@?        %�� ��?      �?%�� ��?�K+�ͨ�?Z���<�?U��ڧ�?��d����?אn:�
�?���e�?��o����?X t���?"rU41X�?PŮi���?X��~�?�E'l� �?G+JK�|�?���jd��?�������?�z�H��?Kf̏�	�??��W�=�?�jn}?��?���ji�?+r_9[�?'�b/���?�ʯ��?�b���J�?"žlT
�?a� �A�?��p�5�?C�ɞNé?!{{�x�?�G(��?Y���u�?!�J�~?        wav     WAV file reader aiff    AIFF/AIFC file reader   flac    FLAC file reader        ogg     Ogg FLAC file reader                �4  �4              �4  �4              �4  �4     !         �4  �4                          FORM    AIF     COMM    Warning: No common chunk found in AIFF file
    Warning: Truncated common chunk in AIFF header
 Warning: Unexpected EOF reading AIFF header
    Warning: AIFF-C header truncated.
      NONE    sowt    Warning: Can't handle compressed AIFF-C (%c%c%c%c)
     SSND    Warning: No SSND chunk found in AIFF file
      Warning: Corrupted SSND chunk in AIFF header
   WARNING: AIFF[-C] files with more than three channels use
speaker locations incompatible with Vorbis surround definitions.
Not performing channel location mapping.
                                                                                                                                     ERROR: Unsupported AIFF/AIFC file.
Must be 8 or 16 bit PCM.
    RIFF    WAVE    fmt     Warning: Unrecognised format chunk in WAV header
       Warning: INVALID format chunk in wav header.
 Trying to read anyway (may not work)...
  Warning: Unexpected EOF reading WAV header
     ERROR: Extended WAV format header invalid (too small)
  WARNING: WAV file uses side surround instead of rear for quadraphonic;
remapping side speakers to rear in encoding.
    WARNING: WAV file uses side surround instead of rear for 5.1;
remapping side speakers to rear in encoding.
     WARNING: WAV file uses rear surround instead of side for 6.1;
remapping rear speakers to side in encoding.
     WARNING: WAV file is a 7.1 'Widescreen' channel mapping;
remapping speakers to Vorbis 7.1 format.
      WARNING: Unknown WAV surround channel mask: %d
Blindly mapping speakers using default SMPTE/ITU ordering.
      data    ERROR: Unsupported WAV file type.
Must be standard PCM or type 3 floating point PCM.
   Warning: WAV 'block alignment' value is incorrect, ignoring.
The software that created this file is incorrect.
 ERROR: Unsupported WAV sample size.
Must be 8, 16, or 24 bit PCM or 32 bit floating point PCM.
 Big endian 24 bit PCM data is not currently supported, aborting.
       Internal error: attempt to read unsupported bitdepth %d
        resampler error: %s
      �?          �?                                                  �?    �5?�5?      �?                                          �?          �?-�]?   ?   ?-�]?                                  �?    �5?�5?      �?-�]?   ?   ?-�]?                          �?    �5?�5?      �?-�]?   ?   ?-�]?�5?�5?                  �?    �5?�5?      �?-�]?   ?   ?-�]?��?��?�5?�5?          �?    �5?�5?      �?-�]?   ?   ?-�]?-�]?   ?   ?-�]?�5?�5?Downmix must actually downmix and only knows mono/stereo out.
  Downmix only knows how to mix >8ch to mono.
    Skipping chunk of type "%s", length %d
 Warning: Unexpected EOF in AIFF chunk
  (@  0@  8@  @@  H@      NB      MB      WB      SWB     FB      `@  h@  p@      LP      HYB     MDCT    %d, %d,         [[%d    , %d    ], %s, %s, %c, %d       , %llu]%s       
       ,       fLaC    OggS    FLAC   assertion failed: flac->channels>0&&flac->channels<=8   src/flac.c      ERROR: Could not open FLAC stream.
     Fatal (internal) error in %s, line %d: %s
      C       REPLAYGAIN_REFERENCE_LOUDNESS=  WARNING: Invalid ReplayGain tag: %s
    REPLAYGAIN_ALBUM_GAIN=  REPLAYGAIN_TRACK_GAIN=  REPLAYGAIN_ALBUM_PEAK=  REPLAYGAIN_TRACK_PEAK=  WARNING: Invalid comment: %s
   Discarding comment not in the form name=value
  %i      R128_TRACK_GAIN METADATA_BLOCK_PICTURE  assertion failed: bits_per_sample>0&&bits_per_sample<=32          �> @^> �> ��> @�>     �L?  �=         � � � � � � � � � � � � �`C  hC  �C  �C  �C  �C  �C  �C  success invalid argument        buffer too small        internal error  corrupted stream        request not implemented invalid state   memory allocation failed        unknown error   libopus 1.1.1-beta-17-g5b712da  �*  �  �6  �  R  �  `m  �  �.  �  PF  �  R  �  0u  �  �*  �  �6  �  hB  �  R  �  �.  �  �:  �  PF  �  �U  �                                                                                          ?��>��$>� �=�3=�ֵ<�<7<J�;�N8;                                    �Z48wN39���9��3:�`�:a��:�~	;ˀ3;�%c;w.�;���;E��;���;�.	<�f<�3<��I<OXb<^|<.��<�Ǚ<\��<�<�<�y�<�_�<9��<c*�<5=�=��=aP&=�1= <=��G=�4S=?8_=i�k=E.x=i��={0�=���=��={��=�3�=!��=P�=3»=O��=��=��=��=�3�=���=!X�=��=��>�>Ǜ>�@>4�>E�>�>Tt$>�g)>3j.>�{3>R�8>��=>C>YPH>z�M>�S>R�X> ^>T�c>�$i>%�n>${t>�7z>  �>��>�؅>�͈>Pǋ>7Ǝ>�ɑ>�Ҕ>&��>�>l�>#�>�A�>�d�>���>��>T�>��>�J�>肺>���>��>�<�>V��>G��>��>�X�>z��>���>D�>ٕ�>��>�=�>S��>��>�A�>��>��>�L�>"��>   ?�?�Y?y?�?)_?�

?V�?,a?|?�?�]??C�?�S?��?ܜ?�??��?��?!!?��"?�Z$?�%?֍'?�$)?(�*?�M,?�-?rn/?��0?��2?�4?��5?7?�8?X:?=�;?�=?*�>?  @?rA?7�B?wMD?öE?�G?�H?��I?�<K?�L?��M?y>O?��P?+�Q?!S?seT?�U?��V?�X?/QY?s�Z?ɯ[?�\?C�]?X_?K<`?�Ta?jib?�yc?<�d?��e?~�f?֍g?��h?�|i?�mj?�Yk?�@l?O#m?n?��n?�o?}p?IGq?|r?��r?��s?>t?�t?��u?�Av??�v?�w?�x?~�x?5y?4�y?>z?��z?�1{?w�{?�|?�v|?�|?�3}?e�}?D�}?�&~?�l~?�~?��~?�?L?�v?�?й?�?��?��?/�?  �?            
                         (   0   8   D   P   `   x                      
                         (   0   8   D   P   `   x   �   �     �>  �>  �>  �>  �>  �>  �>  �>  �>  �>  �>  �>  �>  �>  �>  �>�%�>�9�>	��>��>ͬe>��*>40�=Z�=Z��40ҽ��*�ͬe��틾	����9���%�����>��>`#I>�B�=�B��`#I���������������`#I��B���B�=`#I>��>���>�9�>ͬe>Z�=��*�	����%���틾40ҽ40�=��>�%�>	��>��*>Z��ͬe��9��}=�>ҋ
>ҋ
�}=��}=��ҋ
�ҋ
>}=�>}=�>ҋ
>ҋ
�}=��}=��ҋ
�ҋ
>}=�>	��>Z�=�틾�9��40ҽͬe>�%�>��*>��*��%��ͬe�40�=�9�>��>Z��	�����>�B������`#I�`#I>���>�B�=�������B�=���>`#I>`#I������B����>��>��*��9��Z�=�%�>40�=	���ͬe�ͬe>	��>40ҽ�%��Z���9�>��*>�틾    �#=�}�=%��=�t">�J>�%q>4��>�w�>俰>���>%��>z�>��>�
?|	?I�?�m?��?�$?T�)?.�/?��4?c�9?��>?��B?�#G?K?ؼN?�/R?jjU?�oX?�B[?��]?K[`?n�b?d�d?��f?o�h?�Xj?��k?�nm?�n?�p?�Gq?�ar?Mgs?�Yt?:u?�	v?��v?�|w?�!x?b�x?�Gy?K�y?$Cz?�z?;{?�y{? �{?�#|?7o|?�|?^�|?�0}?�g}?��}?��}?�}?~?B~?Nd~?Ӄ~?��~?��~?��~?��~?� ?�?�&?C7?�F?�T?b?/n?dy?��??�?�?8�?¥?��?�?��?w�?r�?�?l�?[�?�?o�?��?f�?�?��?��?��?��?��?F�?��?(�?x�?��?��?��?��?��?^�?'�?��?w�?��?��?	�?�?��?Y�?��?�?T�?��?��?�?P�?��?��?��?	�?;�?]�?~�?��?��?��?��?��?�?&�?7�?G�?X�?X�?i�?z�?z�?��?��?��?��?��?��?��?��?��?��?��?��?��?��?��?��?��?��?��?��?��?��?��?��?��?��?��?��?��?��?��?��?��?  �?  �?  �?  �?  �?  �?  �?  �?  �?  �?  �?                 �����������F�Tr>����>��꽶+Խ�r�j���.�k�Z�>!��>
f?}<�>!����C?w�
�.>u�LAPS��l좿���k�A�b����0�/O'���e��W½�<������,aͽ�!S�@���#����8�ۧ>�_�>�����+>�S>OJ���>Gw�?��E�@� �+��>��>@�vsAd��'�����<������=TH<�罽gG*�;����z��XZ��U�'��"=��g>�6=4&>�
ͽV��>l>Vf�>��~<j��=��C@�F�?9(��GZ꿋TT@�5[����'&��;�Z�<������;j�����:%��js2��ց:�db>��>���>��>|?��r�7�w>/n�>�3��c&A�)@S��5��}��?<��?��;������"�E�=&p��%��Ҝ<|:h�r����5;�Д��撿�h��Y�/���>@2�>��:>�wҾ�a?'k��!�?��>����[����@���:j��%���)f����Z�#�ݽ���+펽K�ἧ�D�znὬ�>i�Ͼ˽=#e����Y���˽�_o�o���l�?��G@�'��B[�q�)@x����@����6���!��r��d>��<>q��=uܚ=FA�=�(�=G��=��=�Q�=�q=���==��\/�<�k�>jN��b�0>1% @�	#�c`=Q#A���@��xca�O<b����<��=��G�a��=#�����������쇽-��=��L�)��W?0DS=���>��Z?]+?�R뽲Kh�%Yﾱ�\�9b'@���>�����=.=�=�b�=C�=��=�����=�H�7)�=q4l=S��=��S�����E/?qY>�_�>��b>���OY]>������A��~�B?�R��L5�E�7�Tı����>��{��`�=��>�6��3�=.����s��"�>!��N`�e�����k�8>�����>()�>��>_~�f��@��¾.8c>וּ�0l��z��?��<q7��;��yҼ	�d<�V�<ef0���5<�p=>�ϼ���y#�=N&^��>>�]�=jo�����)S��j��Y��t���m������*�@@n��f���L$��W>����9>@WV�6=��k<�8�;����_>������k?���?�V{�0�����>���>*�i?fKV>��_^@'���N�?��9�p�B<M�=m�b=m��<�C��]���|I<H鈻>���}@ =�2 =�l�>���~P�<�Q2��ڨ>,��=p��>>!�=�>��@}vh?P�g�X�V��8C>ϡ<>2t,��^m>�p�AJl>�e���{>H0��{�=ys8�Uj&>U��<�r�=u��>�&�?�?l�o�3��B	���f\���@t�cARD�@�E����D����?K#a=R'>;�=��=ӯc������f�<n�="��<�w>�C=Kx�����?�M�w�#@A�<?f���	2�GZ�>�ݿ��|@��?e��>KY5���pJ�Kþ~�=^,h��<@3��?��a?�_?-ϛ?.�_����>]�H?�Qr?�7�>�]�"�b?�>�=���t]�>
�#>�+��@��=:<�{��E,�>tF���㼚��]��3�m@��w@�a@   O   O       @�EL�R�Z�b�k`u  03<?��������                                                                            	            
                   �?   @  @@  �@  �@  �@  �@   A  �A  �A  B  0B  HB  `B  xB  �B  �B  �B  �B  �B  C      �?  �?  �?  �?  �?  �?  �?   @   @   @   @   @   @   @  @@  @@  �@  �@  �@   A   A    ~|wmW)	      ���nVF;3-(%!


						           ~|wmW)	      ��  7�  ��  �  g�  E�  ��  ��  ��  x          �Y?      �?  �?pX        x      �X  �Y  �Y  �     �[  �[  \  @\  x\  �  �x  py  �z                
       " ( 0 < N d                          ZPKE?81("
        ndZTNGA:3-'       vng]VPKFA;5/(    ~wph_YSNHB<6/'   �xrga[UNHB<6/)#
���|qke_XRLF@93-'!����{uoib\VPJC=71+$�����yslf`ZTMGA;5.�������}vpjd^WQKE?8-��������������������h                            " $       j�8R�:i�:��W;�c�;*<0�9<�>w<��<���<���<��=�*=��F=S�d=��=���=˲�=Ѿ�=:��=T��=��=%>��>_1>h�+>��8>0RF>�T>�Gb>��p>��>R[�>`�>��>y۞>p�>��>�`�>��>F'�>���>x*�>���>S�>���>��>�?Z?$�
?P�?+?AE?%j?s�?Ώ#?�'?t|+??Z/?&3?��6?��:?3>?ŌA?w�D?:H?'mK?ΆN?�Q?�lT?�8W?i�Y?E\?��^?sYa?��c?��e?��g?�i?Ҡk?n_m?Po?�p?�r?�]s?�t?��u?W�v?��w?��x?�y?srz?''{?��{?�^|?5�|?�Y}?��}?�~?�p~?��~?��~?&)?�U?�z?��?̲?�?�?��?��?��?��?��?��?�?��?��?��?  �?�  ��;���� `                      �  |      �   ���;    0                       �  |      x   ��<                           �  |      <   ���<                             �{  |      ��?��?j�?��?�?��?��?0�?��?��?�?��?k�?��? �?��?Ǥ?�?��?�?�q?vc?KT?nD?�3?�"?�?��~?��~?��~?��~?V�~?.�~?S~?�g~?�O~?�6~?�~?�~?��}?��}?f�}?F�}?tt}?�U}?�6}?�}?<�|?��|?��|?I�|?�l|?�H|?$|?��{?��{?��{?0�{?�a{?9{?�{?=�z?H�z?��z?Mbz?H5z?�z?0�y?�y?Zzy?�Iy?�y?��x?{�x?N�x?sMx?�x?��w?ͭw?:ww?�?w?
w?n�v?%�v?/\v?�!v?<�u?@�u?�mu?B0u?A�t?��t?;tt?74t?��s?,�s?&ps?v-s?�r?�r?dar?
r?�q?W�q? Hq?��p?U�p?np?$p?b�o?�o? Bo?��n??�n?SZn?�n?��m?�lm?m?��l?yl?�&l?��k?�k?P+k?@�j?��j?2*j?5�i?�{i?M#i?d�h?�ph?�h?ջg?``g?Hg?��f?3Jf?6�e?��e?W.e?w�d?�md?�d?�c?�Hc?��b?�b?�b?�a?wSa?\�`?��`?N`?[�_?�N_?��^?�{^?p^?n�]?�:]?��\?�a\?Y�[?Q�[?�[?r�Z?�8Z?.�Y?'WY?��X?OsX? X?�W?W?��V?V/V?��U?:CU?K�T?�TT?��S?dS?��R?�pR?�Q?�{Q?��P?σP?P?҉O?�O?��N?�N?	�M?�M?A�L?L?;�K?�K?��J?�J?~I?��H?�tH?$�G?�hG?)�F?�ZF? �E?�JE?��D?28D?/�C?�#C?��B?�B?ȀA?�@?�f@?(�??�J??�>?�,>?��=?�=?�{<?\�;?uX;?
�:?3:?��9?�9?Gw8?Q�7?�L7?�6?k 6?t�5?��4?Z4?��3?�(3?0�2?B�1?�Z1?�0?�$0?��/?U�.?�O.?2�-?i-?'v,?k�+?78+?��*?g�)?�W)?��(?2(?3s'?��&?�-&?y�%?��$?aB$?��#?}�"?�R"?Ϭ!?M!?[_ ?��?%?�g?0�??�l?��??Cm? �?Q?6j?��?�?gc?��?v?�X?�?�?�J?��?��?�8?��?��?�#?�p?
�?�
?�V?ߢ
?c�	?�9	?I�?��?�?Tb?��?��?=?=�?�?�?�[?a� ?���>�]�>��>�s�>���>��>��>���>�>���>�+�>��>�5�>���>�<�>���>�A�>��>�C�>��>�C�>|��>�@�>x��>�;�>��>�3�>.��>�)�>���>}�>n��>��>���>���>}t�>���>'`�>(��>�I�>���>�0�>ƣ�>�>懽>-��>�i�>2ڸ>�I�>/��>�'�>/��>��>9q�>ޭ>VJ�>/��>�!�>z��>���>�`�>|ʢ>�3�>@��>z�>Dl�>�Ӛ>�:�>��>0�>�l�>)Ғ>7�>���>���>Qc�>�Ɗ>�)�> ��>P�>"P�>���>��>��~>��{>�gx>/'u>��q>�n>sak><h>b�d>�a>�P^>[>��W>�}T>k6Q>]�M>��J>�\G>�D>��@>�}=>�2:>��6>]�3>�M0>B ->}�)>Bd&>�#>n�>�v>�&>m�>��>[4>��>��>T>>��>�0�=��=q��=3:�=O��=���=�=�=��=���=�;�=���=��=l5�=���=Uٟ=�*�=~{�=�ˋ=�=��|=Fvo=]b=ֱT=�NG=�9=�,=@"=,�=�W=���<`�<vJ�<}�<2��<��O<�$<*�;��;;.}ֹ�Fq���㻦�'��)]��b���0��������ټ����1�����{"��/�D=���J��
X��le���r����Ȇ��w��\'��c֚�����&3���஽����:����½��ɽ�=нT�ֽJ�ݽ�;�]��r���3������R����Ge	�2�����Y��������J�G� �N�#��7'� �*���-�� 1��m4���7�e;��P>�:�A�Z�D��.H��wK�t�N�]R��OU�s�X���[�*"_�gb�m�e��h�,2l��to�T�r�j�u��7y��w|����uz��E�������U����ᐉ��-��pʌ��f��t��ߝ���8���Ӕ��m�����⠙��9��_Ҝ�yj��#��^���&0��}Ƥ�`\����Ɔ��G��P����B���կ��h������M���n�����0>���ͺ��\���뽾�y����#�¾� ľ��ž�7Ǿ��Ⱦ"Mʾ��˾`;��ξ�pоB�Ѿ-Ӿ�վC�־mؾ��پ�۾Y�ܾ޾F�߾�"����$侾���"�8�� �$�뾢��z��3���F}�������m������X[��(���GF������8 ��� ����B�%��;���j�S"�S�����8F�������f	��
���
����7�������$P�8���2e������v�c&�������3���Ȏ�<����H��HA�������B�����c@�h�����%:����#� ��/!�_�!�R|"��!#���#�k$��%�\�%��V&�h�&���'��=(��(��)�} *���*�`+�'�+�ĝ,��;-���-��v.�y/���/�sK0���0��1��2���2��N3���3��4��5�?�5�F6�n�6�Er7��8�q�8��09���9��W:���:��|;��<��<��0=���=��P>���>��n?���?�@�@�SA��A��/B�`�B�SFC���C��ZD���D��lE��E��|F��G���G��H�%�H� I���I�o#J���J��)K���K�c-L�z�L�/M���M�b.N�9�N�~+O�3�O�U&P��P��Q�P�Q�(R�m�R�	S�;�S���S��rT��T��`U��U��LV���V�'6W� �W�BX��X��Y�xsY�Y�Y��TZ�Q�Z�f3[��[��\�
}\���\��U]�>�]�,^�W�^���^��h_�h�_�39`�b�`��a��la�:�a��6b��b���b�Yac���c�,%d�%�d�~�d�7Fe�N�e��f��af�;f�^g�Mwg���g�D-h�K�h���h�o9i���i��i��?j�	�j���j�{@k���k�Y�k�O;l���l�K�l�O0m���m�e�m�un��mn���n��o�.Uo���o��o��6p�g�p���p�q��Yq��q���q�q-r��rr�&�r��r�2>s���s���s��t�IDt�"�t�P�t��u��?u��|u�P�u�!�u�E0v��jv���v���v�w��Mw��w�W�w��w�&x�zZx�*�x�+�x�}�x�!%y�Vy�\�y��y���y�z��@z�smz���z��z���z��{�aC{�l{�"�{�z�{� �{�|�\-|��Q|��u|��|���|�U�|�s�|��}��>}��]}��{}���}���}���}�b�}�?	~�i#~��<~��U~��m~��~�ɛ~�ı~��~���~���~���2��&�8�vH�'X�$g�nu����������_��t��������������]��=��j���������������������?9�?��?K�?�?#�?Y�?��?[�?(�?'p?ZR?�1?X?%�~?&�~?\�~?�d~?i3~?A�}?O�}?��}?R}?�}?��|?�|?MD|?��{?ͬ{?�\{?C
{?ݴz?�\z?�z?.�y?�Cy?��x?�zx?Lx?�w?9w?O�v?�Tv?��u?�eu?u�t?Dlt?e�s?�gs?��r?�Xr?9�q?	?q?4�p?�p?��o?��n?�Pn?��m?m?�nl?�k?� k?�uj?I�i?9i?�eh?o�g?��f?|>f?��e?o�d?� d?Z<c?�ub?L�a?��`?Y`?�A_?�n^?�]?�\?��[?�	[?�*Z?�HY?�dX?�~W?�V?ЪU?c�T?��S?��R?'�Q?u�P?y�O?4�N?��M?��L?��K?��J?
�I?R�H?e�G?G�F?��E?��D?�C? �B?:oA?4U@?9??�>?��<?&�;?��:?6�9?�d8?":7?�6?�4?|�3?�{2?�G1?0?��.?�-?Vb,?H$+?Z�)?��(?�^'?q&?%�$?	�#?#>"?u� ?�?�R?� ?=�?�W?� ?�?�M?��?��?�4?��?Pq?B?��?|@?��	?�m?�?��?&?�?~D?��>n��>���>���>���>Q��>�>G�>��>��>w�>��>$�>X�>*��>���>���>���>R��>���>���>r�>V�> 8�>��>���>�Ѱ>���>���>�Y�>'.�>� �>yѝ>���>�m�>�9�>��>̍>��>kX�>V�>�ހ>�?{>�t>�;n>ɵg>M-a>Y�Z>�T>Q�M>c�F>F_@>�9>�03>��,>r�%>�\>Ҽ>v>x>�>\�=r�=)��=fh�=N�=��=�_�=��=���=F�=�m=zS=�>8=�u=��=ʽ�<V#�<aI<ŧ�;=zV�	F��c�P���A$ݼ�]	�#($���>��Y��zt����B����Z������W��hʽ��׽��ia�e���J}�h!�����d�.!���'�S=.��4��n;��B��H�y)O���U�VE\���b��Wi���o��_v�x�|�T����넾8'��ra��$���Eё�����:���l��t���=̡�@���s$���M��Iu��ښ��x���෾����K���8��%Rľ[iǾa~ʾ0�;��о �Ӿ�־��پ��ܾ��߾��⾩����辽�����x��`�����������t��m. ���-���,���\�L��2
�l��2�lf���-,��������H�v��q���V�b��Q��U�	������D!�	�"�|�#�$$%��j&��'�0�(��4*��s+���,�?�-�'/��^0�Д1���2���3��*5��X6���7��8��9��:�� <��B=��b>�O�?��@�h�A���B��C��D�F��G�V!H��+I��3J��9K��=L�	?M�D>N�=;O��5P�Z.Q�y$R�JS��	T���T���U�M�V�p�W�7�X���Y��bZ�>A[�u\�A�\���]���^�v_�"F`��a���a��b��mc�T1d�~�d�&�e�Imf��&g���g���h�{Di���i�àj�Kk���k�ޗl�d:m�P�m��wn�So�f�o��?p���p��bq�[�q�:{r�qs���s��t��t��	u�k�u���u� rv���v��Tw��w��,x���x���x�(\y�ٻy��z�sz�y�z�/{�$q{�X�{��|�vV|�_�|���|��"}�wa}�G�}�O�}��~�@~��p~���~���~���~�u�):�Z�+w�x�����������������f���������?��?��?-�?|�?�l?y-?,�~?��~?-~??�}?RJ}?H�|?(;|?��{?��z?�Qz?H�y?�x?	x?+w?FFv?�Vu?N\t?8Ws?vGr?-q?p?��n?��m?@Zl?~k?k�i?Oh?��f?�ie?>�c?�\b?��`?m'_?&~]?(�[?�Z?SHX?�xV?��T? �R?v�P?��N?��L?��J?�H?|�F?.�D?AdB?�1@?��=?��;?Bh9?�7?�4?�U2?)�/?w-?e�*?5z(?��%?�_#?�� ?�(?��?��?J"?*h?��?��?{?9@?�f?�?-F�>[q�>���>$��>E��><��>L��>���>�{�>�V�>�(�>p�>���>�l�>��>�ȣ>sk�>l�>Ŝ�>�+�>���>�oz>!km>\`>)CS>� F> �8>&�+>��>-G>W�>nc�=½�=��=�W�=���=��O=e=�
�<*�;<�xֺ-Dq�W��L�'��]�J��Z��m���"hٽN���Q�/����!��/��A<�djI�M�V�͠c�P�p�E�}�S���ȋ�8�����f���^��ز��i���+D��؀��*�ľ��ʾ�ѾE׾u-ݾ�3�v0��"ﾍ
�������\ �8@������Z�����TX�P��������,���mn!��$���&�t)�Ǜ+��.���0�&�2��P5�U�7���9�JE<�n�>�7�@���B�SE�u6G��LI�kZK�_M��ZO�>MQ��6S��U�r�V�źX��~Z��8\�b�]�8�_�@-a�g�b��Id���e��=g��h��	j�'`k�T�l��m�z%o�XRp��tq�g�r��s��t���u�~�v��bw��9x�/y���y�~z��){��{�z_|���|�i}�>�}�@F~��~���~�M>��z�������C�������?��?��?�$?8�~?��}??�|?*�{?�:z?Ժx?w?�7u?�5s?	q?�n?�0l?��i?/�f?S�c?��`?NH]?E�Y?>V?+�R?e�N?^�J?�kF?jB?��=?@9?m4?2�/?��*?�%??t ?m-?a�?O?h�
?k?.��>���>���>��>���>�b�>N�>*T�>Q��>�Ώ>m�>��k>b�Q>0P7>��>�U>bh�=| �=$�H=��<�wV�d=��c�g]���ܽ��s#�4�=��-X�&Nr�"�����4ϟ��|��3��{ž[�Ѿ��ݾP�������� �&y�$!����f&������!��&�J�+�V�0�[�5��E:���>��4C��yG�}�K���O�sS��'W�c�Z��^�0`a�zd��kg�5j��l��Ko�7�q�b�s�ɱu�~w��y�!�z�U�{�Y�|���}��~�tF����������������������        ) ) ) R R { � � �                 ) ) ) ) { { { � � � 
') ) ) ) ) ) ) ) { { { { � � � 

1>HP{ { { { { { { { � � � � 111>>W_fl� � � � � � � � 1111WWW__rx~�      (("$&')*+,-.//123456779:;<=>??ABCDEFGG(!)059=@BEGIKLNPRUWY[\^`begiklnpruwy{|~�('3<CIOSW[^adfikosvy|~������������������#1ANYckrx~�������������������������!:Oap}���������������#?Vj{������������7K[iu�������������������$AYn������������)Jg��������	+On������'Gc{��������	,Qq������1Z����3_����/W{����4a����9j���;o���7g���<q���Az��C���������ࠠ���������=%����������������Ʒ�B(�������������������@&�������������������B(�������������������A'��������������ɼ���B(��������������¸���A'��������������ƻ���B(    $ 0    ( 4     , 8    % 1    ) 5 	  ! - 9    & 2    * 6 
  " . :    ' 3    + 7   # / ;   �?   �c�?�uV���?
qּy�?�� �/�?:^V��s?��5?*����~?3e����~?ֽ�9~?s��U�}?����Y}?���%�|?\0 �gM|?�i-���{?�:��{?��G��gz?��T�	�y?��a�<�x?Mo��x?�|��Fw?�wcv?>���6uu?uj��0|t?Lԗ�qxs?z7��jr?�����Pq?�誾O-p?A6��!�n?|��v�m?����^�l?�þ�5k?�ʾ�i?�?о|h?�Z־�g?�kܾt�e?�s�d?qq辍�b?e�(�`?'N���[_?�,��׳]?   �\?���FZ?w����X?����V?wm�1�T?�9���R?  �lQ?ʿ��O?y��M?�+�4K?����
I?�|�
�F?$!���D?F�#���B?:B&��x@?��(��>>?%L+���;?��-�"�9?80��_7?e�2��5?�5�e�2?�_7�80?"�9���-?��;�%L+?�>>���(?�x@�:B&?��B�F�#?��D�$!?
�F��|?�
I���?4K��+?�M�y?�O�ʿ?lQ�  ?��R��9?1�T�wm?�V���?��X�w�?�FZ��?\�   ?׳]��,�>�[_�'N�>(�`�e�>��b�qq�>d��s�>t�e��k�>�g��Z�>|h��?�>�i���>�5k���>^�l����>v�m�|�>!�n�A6�>O-p���>�Pq����>jr�z7�>qxs�Lԗ>0|t�uj�>6uu�>��>wcv�>�Fw��|>�x�Mo><�x���a>	�y���T>�gz���G>�{��:>��{��i->gM|�\0 >%�|���>�Y}���>U�}�s��=�9~��=��~�3e�=�~�*��=�5��=�s�:^V=/���� =y��
q�<����uV<c�� 0�$  ���uV�c��
qּ����� �y��:^V�/��򅽯s�*����5�3e���~�ֽ��~�s��9~����U�}�����Y}�\0 �%�|��i-�gM|��:���{���G��{���T��gz���a�	�y�Mo�<�x��|��x���Fw�>���wcv�uj��6uu�Lԗ�0|t�z7��qxs�����jr��誾�Pq�A6��O-p�|��!�n�����v�m��þ^�l��ʾ�5k��?о�i��Z־|h��kܾ�g��s�t�e�qq�d�e�b�'N��(�`��,���[_�   �׳]���\�w���FZ������X�wm��V��9�1�T�  ���R�ʿ�lQ�y��O��+��M����4K��|��
I�$!�
�F�F�#���D�:B&���B���(��x@�%L+��>>���-���;�80�"�9�e�2��_7��5��5��_7�e�2�"�9�80���;���-��>>�%L+��x@���(���B�:B&���D�F�#�
�F�$!��
I��|�4K�����M��+��O�y�lQ�ʿ���R�  �1�T��9��V�wm���X�����FZ�w��\���׳]�   ��[_��,��(�`�'N����b�e�d�qq�t�e��s��g��kܾ|h��Z־�i��?о�5k��ʾ^�l��þv�m�����!�n�|��O-p�A6���Pq��誾jr�����qxs�z7��0|t�Lԗ�6uu�uj��wcv�>����Fw���x��|�<�x�Mo�	�y���a��gz���T��{���G���{��:�gM|��i-�%�|�\0 ��Y}����U�}�����9~�s����~�ֽ�~�3e���5�*����s��/��:^V�y���� ����
qּc���uV�  �� 0�c���uV<���
q�<y���� =/��:^V=�s��=�5�*��=�~�3e�=��~��=�9~�s��=U�}���>�Y}���>%�|�\0 >gM|��i->��{��:>�{���G>�gz���T>	�y���a><�x�Mo>�x��|>�Fw�>wcv�>��>6uu�uj�>0|t�Lԗ>qxs�z7�>jr����>�Pq���>O-p�A6�>!�n�|�>v�m����>^�l���>�5k���>�i��?�>|h��Z�>�g��k�>t�e��s�>d�qq�>��b�e�>(�`�'N�>�[_��,�>׳]�   ?\��?�FZ�w�?��X���?�V�wm?1�T��9?��R�  ?lQ�ʿ?�O�y?�M��+?4K���?�
I��|?
�F�$!?��D�F�#?��B�:B&?�x@���(?�>>�%L+?��;���-?"�9�80?�_7�e�2?�5��5?e�2��_7?80�"�9?��-���;?%L+��>>?��(��x@?:B&���B?F�#���D?$!�
�F?�|��
I?���4K?�+��M?y��O?ʿ�lQ?  ���R?�9�1�T?wm��V?�����X?w���FZ?��\?   �׳]?�,���[_?'N��(�`?e�b?qq�d?�s�t�e?�kܾ�g?�Z־|h?�?о�i?�ʾ�5k?�þ^�l?����v�m?|��!�n?A6��O-p?�誾�Pq?����jr?z7��qxs?Lԗ�0|t?uj��6uu?>���wcv?��Fw?�|��x?Mo�<�x?��a�	�y?��T��gz?��G��{?�:���{?�i-�gM|?\0 �%�|?����Y}?���U�}?s��9~?ֽ��~?3e���~?*����5?򅽯s?:^V�/�?�� �y�?
qּ��?�uV�c�? �S�  �?�uV<c�?
q�<��?�� =y�?:^V=/�?�=�s?*��=�5?3e�=�~?�=��~?s��=�9~?��>U�}?��>�Y}?\0 >%�|?�i->gM|?�:>��{?��G>�{?��T>�gz?��a>	�y?Mo><�x?�|>�x?>�Fw?>��>wcv?uj�>6uu?Lԗ>0|t?z7�>qxs?���>jr?��>�Pq?A6�>O-p?|�>!�n?���>v�m?��>^�l?��>�5k?�?�>�i?�Z�>|h?�k�>�g?�s�>t�e?qq�>d?e�>��b?'N�>(�`?�,�>�[_?   ?׳]?�?\?w�?�FZ?��?��X?wm?�V?�9?1�T?  ?��R?ʿ?lQ?y?�O?�+?�M?��?4K?�|?�
I?$!?
�F?F�#?��D?:B&?��B?��(?�x@?%L+?�>>?��-?��;?80?"�9?e�2?�_7?�5?�5?�_7?e�2?"�9?80?��;?��-?�>>?%L+?�x@?��(?��B?:B&?��D?F�#?
�F?$!?�
I?�|?4K?��?�M?�+?�O?y?lQ?ʿ?��R?  ?1�T?�9?�V?wm?��X?��?�FZ?w�?\?�?׳]?   ?�[_?�,�>(�`?'N�>��b?e�>d?qq�>t�e?�s�>�g?�k�>|h?�Z�>�i?�?�>�5k?��>^�l?��>v�m?���>!�n?|�>O-p?A6�>�Pq?��>jr?���>qxs?z7�>0|t?Lԗ>6uu?uj�>wcv?>��>�Fw?>�x?�|><�x?Mo>	�y?��a>�gz?��T>�{?��G>��{?�:>gM|?�i->%�|?\0 >�Y}?��>U�}?��>�9~?s��=��~?�=�~?3e�=�5?*��=�s?�=/�?:^V=y�?�� =��?
q�<c�?�uV<   0 H `    8 P h  ( @ X p   4 L d  $ < T l  , D \ t   1 I a 	 ! 9 Q i  ) A Y q   5 M e  % = U m  - E ] u   2 J b 
 " : R j  * B Z r   6 N f  & > V n  . F ^ v   3 K c  # ; S k  + C [ s   7 O g  ' ? W o  / G _ w   0 ` � �  @ p � �   P � � �  4 d � �  D t � � $ T � � �  8 h � �  H x � � ( X � � �  < l � �  L | � � , \ � � �  1 a � �  A q � � ! Q � � �  5 e � �  E u � � % U � � � 	 9 i � �  I y � � ) Y � � �  = m � �  M } � � - ] � � �  2 b � �  B r � � " R � � �  6 f � �  F v � � & V � � � 
 : j � �  J z � � * Z � � �  > n � �  N ~ � � . ^ � � �  3 c � �  C s � � # S � � �  7 g � �  G w � � ' W � � �  ; k � �  K { � � + [ � � �  ? o � �  O  � � / _ � � �   ` �  �  � � @�@ �  `� h � (�( � � H�H � h� p � 0�0 � � P�P � p� x � 8�8 � � X�X � x� d � $�$ � � D�D � d� l � ,�, � � L�L � l� t � 4�4 � � T�T � t� | � <�< � � \�\ � |� a � !�! � � A�A � a�	 i � )�) � � I�I � 	i� q � 1�1 � � Q�Q � q� y � 9�9 � � Y�Y � y� e � %�% � � E�E � e� m � -�- � � M�M � m� u � 5�5 � � U�U � u� } � =�= � � ]�] � }� b � "�" � � B�B � b�
 j � *�* � � J�J � 
j� r � 2�2 � � R�R � r� z � :�: � � Z�Z � z� f � &�& � � F�F � f� n � .�. � � N�N � n� v � 6�6 � � V�V � v� ~ � >�> � � ^�^ � ~� c � #�# � � C�C � c� k � +�+ � � K�K � k� s � 3�3 � � S�S � s� { � ;�; � � [�[ � {� g � '�' � � G�G � g� o � /�/ � � O�O � o� w � 7�7 � � W�W � w�  � ?�? � � _�_ � �                                                    �@  �@  �@  �@  �@  �@  �@  �@  �@  �@  �@  �@  �@  �@  �@  �@  �@  �@  �@  �@  p@  p@  p@  p@  p@    HA�B�A�@�>�@�@�\N\O\NZOt)s(r(�����
��0�6�6�5�8�7�7�=rF`JXKXWJYB[Cd;l2x(z%a+N2SNTQXKVJWGZI]J]Jm(r$u"u"�����
����	�6s?fBbEcJYG[I[NYVP\B]@f;g<h<u4{,�#�a&M-=Z]<i*k)n-t&q&p&|��������
���	�
�;nGVKUTS[BXIWH\KbHi:k6s4r7p8�3�(�!�b#M**y`Bl+o(u,{ x$w!!�"���������
���?rJRTS\Rg>`H`CeIkHq7v4}4v4u7�1�'� �a!M(  f?  L?  &?   ? �k? .? p�> �L>         !""#$$%%   
                       �p, ����F ���= ����G2*&#!
	        �c      0      G8+ ǥ�|m`TG=3*  ���ǻ�����{ri`XPH@92,&!	 X�  `�  p�      �������E]sv�������������������������������������������ࠔ  ��  ��          )��*�>)��%A��B�&�!'�$@��
7+�J5��7L��]�';� M	�,�(		�e��* �!D�7.��)�='�*X�<A���I8�^� c�f.�	�TH��.h�&0 �FS��u��u��_�M<��|�&T�*�8.��#O��AX��Q1� K��,\��E�_)�'C� �x7��,z�Q 	
X�  �  `�      .ZW][Rbmxvqsuwc;Wo?opP~|}|�y~�~z���evw�~V|x{w��km�  �  (�                @  �$  �,  �4  \D  �a  �8     (#  �.  �8  DH  �_  ��  �8     )  �6  hB  �S  To  �  �8   & ( . 4 > T \ʾضߚ��x�z���4��dfJ B'�5����������ŮR;876.
	        @       ˖      �æ}nR  �   �  x       �@      �
     �       ����    d �   d �< 0    �U      ��@     ͚f3    ի�U+   ����`@  d(  
g�V��
g�uR�Y�uR�F1
�bF1
���ƭ��"�R���
"�R    F�.+�Kf�,
�aH���0㐥��
�k����Զ��xnbUH<1( 	 ���������hJ4%
    �ɷ���|obXOF>82,'#
       ����waC+
      �wP=/#	     q?      
    }3
	 �i-
	 բtS;+ 	 �t;
	 �弇V3
 ��չ��gSB5*!
 ���ΤvM.
 ����ܿ�wU9%
 ������˳�|bK7( ����ܢjC*	     9k���������������E/Co��������������RJO_m�������������}J;Ea��������������sUIL\s�������������qfefkv}�������͖ආeSOUax�������������xe\Y]fv���������ඛ�vmhfjov�����      񾲄WJ) ����j9'       �J�OP�_h�_c[}]L{s{      � �* � ��H �ր* ��P ���~6 ��ӟR# ��˨�X5 ��ع�lG( ���Ǧ�Z9 ���Է�mI,
 ����Ʀ�Z:! ����ҵ�nK. �����Ĥ�\<# �����д�nL0 � �2 � ��H
 �Ձ* ��W ��> ��Ϡc/ ��ٶ�Q) ���ɟk= ���Ϊ�V2 ���ٺ�lF' ����Ȧ�Z8 ����Ѵ�nL/ �����£�]>% �����ͱ�oO3 � �6 � ��I
 �ׁ) ��V ��ȁ8 ��٤^&
 ��⽄G ���˟i8 ���ճ�U/ ����uF% ����Ы�U0 ����ܽ�kC$ �����ɦ�Z7 �����շ�mI+
 � �: � ��L �ւ+ ��W ��˃8 ��ݧ^# �����A ���Ӣc- ���ߺ�J! ����ʞi9 ����ֳ�T, �����ğpE$ �����Ѱ�]7 ������uL*   	#,6AMZhw�       �1CMR]c�$-�.BNW^h� *3B�^hmpsv�5EPX_f         
 
     	  *�����@  c�a�� '+�V�� [ V��  ����M����f ����HI�
%>      ��=�@ � ��$ 6 �H3$EE �  r� ����{8h���' : ����x � ����@#    �>����     ������A Z  c����Q/4
��W� ������  %  ��������2 $o���kg�    ���������� , d � � =}�����Y�)T     � ��igwu a���t4 � ��tn�����f�����]���u�S�����fG�����';���a�.����^"��c�����������  X�  �  ̦  ��  0�  ܮ  D�   �  t�  ��  ��  �  0�  <�                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  	                                    !   #   %   '   )   +   -   /   1   3   5   7   9   ;   =   ?   A   C   E   G   I   K   M   O   Q   S   U   W   Y   [   ]   _   a   c   e   g   i   k   m   o   q   s   u   w   y   {   }      �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �           	                        !  #  %  '  )  +  -  /  1  3  5  7  9  ;  =  ?  A  C  E  G  I  K  M  O  Q  S  U  W  Y  [  ]  _        )   =   U   q   �   �   �   	  9  m  �  �  !  e  �  �  I  �  �  Q  �    }  �  Y  �  E  �  A  �  M	  �	  i
  �
  �  1  �  u    �  y  -  �  �  a  %  �  �  �  ]  5    �  �  �  �  �  �  �  �  �   �!  �"  �#  �$  �%  �&  �'  )  5*  ]+  �,  �-  �.  %0  a1  �2  �3  -5  y6  �7  9  u:  �;  1=  �>  �?  iA  �B  MD  �E  AG  �H  EJ  �K  YM  �N  }P  R  �S  QU  �V  �X  IZ  �[  �]  e_  !a  �b  �d  mf  9h  	j  �k  �m  �o  qq  Us  =u  )w  y  {  }    �  �  �  �  )�  =�  U�  q�  ��  ��  ݕ  	�  9�  m�  ��  �  !�  e�  ��  ��  I�  ��  ��  Q�  ��  �  }�  �  Y�  ��  E�  ��  A�  ��  M�  ��  i�  ��  ��  1�  ��  u�  �  ��  y�  -�  ��  ��  ?   �   �   y  ?  A  �    �  A
  �  �    �    !  �&  -  �3  y;  �C  �L  �V  a  l  �x  �  ��  ��  �  �  �  ?�  ��  � y) ?A AZ �t � �� A� �� � . �R x � �� � � yK �z �� ��  I �� � �� �5 v � � ?B �� �� y! ?p A� � j �� A	 �x	 ��	 9
 ��
  m �� G � y+ �� � ��  � � � �+ �� I � r ? �� �F y� ?� A8 �� � �F A� � �s 4 �� � � �Y ,  �! y�! ��" ��# �~$ g% S& �C' �7( �/) �+* ,+ 0, 8- ?D. �T/ �h0 y�1 ?�2 A�3 ��4 6 �;7 An8 �9 ��: < �c= �> �? �JA �B ��C y[E ��F �(H ��I 	K �L ��M �}O �Q ��R T �U NW ?�X ��Z �:\ y�] ?�_ AVa �c �d ��f Aoh �Bj �l �m A  �  	  �  A  	  �   �.  A  )X  	u  ��  ��  	�  )4 | �� �0 	� A �� 	S �
 A� �� )� 	� 
 c 	� )t �3 A �* 	g �� Am 	< �@! �}$ �' )�+ 	�/ ��3 �^8 	)= )@B �G �`M �pS 	�Y A�` ��g 	Qo �Bw A� �j� )�� 	\� �� 6� 	d� )� �V� A#� ��� 	y� �

A<	)��9��J�\)0o	������i�	�)|�������	�9A�T�Mp	�����AV���)�		�+wNyr	��)��i�A�
8	;c���A{�	�����N0�)�	���$��]	��)����RR���	^�A��Da	]��B�A�>	���	)�		x-
Ԁ
,�
	�-)���l�A@�	���eA*�	�4����
�|)��	Mc�L���S	��)�N����S�P�	�cA����~	k�
�A�<��)�t	��O_	"	)$��_fA����	ϊ�UHAI	 	�� ���!�a"*0#)�$	;�$�Q�%�  E    3  [W  �  w�  9M c� �� � ! �� �	 � �� 3� �� /� 1^$ �`, ��5 ��@ Y7M �[ 5Cl ?& A�� KӬ }!� '�� �	�[/��YO&�Qe���M�6�I|y���_ծw_/�akG��\<GC�	K[s�%g�o�cqH,	;`
���
������C�u�/�p����62���g!O)�A��<�������U$"���$�E'���)�h~,p/�-�2�)�5+�79]%�<�c�@I�D�ɲHenM�ÚQ��_V{�\[-��`�f���k�íq��w�"]~#  qM  ��  �& e �w �� 5� -p �� !� ��( u�8 YHM )�g %�� =Ǵ Q&� �,��|����RU�+��MT�q?A.S͗���		9w�
IW���]j1'MѲ��&H��u��($ٜm)��R/m��5��9=aA\E��`N��YX�\ci~o��|��  � �k � ?# �= ��# ��9 �Q[ �� u� q�2?����m�_q���{=�S���
�aX?���%��e4�&���/�:;b"Iq��Y?��m�X� �!	 , A�% AOG �C� �� Fs�Z��5�A��A�����v%L4��WG��`A���#Q Ş2 �k ��� k����P!�	3l0բ��g')�}<{��[w���-ɭ�{ ��9�^=��cw	�(�!4 uH�8}WW`�[���'��^�����6���h����9j�"�K�x+�3�	T�~�y    �yff    �~3s    #<Sl����� 7Me}����*BYr�����2Hax����,EZr�����5Pj�����,@Zs����>Rdx����2Ogx����-Aj|����1Kay�����4F]t����">Kav����!8F[q����"3Hau����2CZu����0B_u����!3Mt�����FWj|����!5@Su����"A_l�����Hcq�����"+=N]r����6a|�����&8Yv�����1?Uo����0Mg������/Jc|�����!*=L]y����5Wp������4T������%0@Thv����Բ��l`UROM=;98310-*)(&$"
 �������˾�����}rf[QG<4+# ���������tCR;\HdY\          cB$$"$""""SE$4"tfFDD�fDD"AUDT$t�������؉�����hfdDD�ڹ���ػ�����ۊg����t�����ٸ���٫����������ڊ֏�ڨ􍈛����ۋ���؉�����t�۹�dd�df"DDdD���ڨ���hF��������ۋ���� ����# ����; ����G
 ���R ���Z ���a ���_% �����������]`������SG������I"B�����~I+9�����}G0:�����nI9>h����{A7Dd���          �    
 .d��  г  �  (�  ȴ  �  X�      &6EUdt��������)7ESbp�������"3=N\j~�������
$2?O_n~�������%3;NYk{�������
 3CQ`p��������%3AObq~�������"7?NWlv������� $8O[lv�������+:JYix��������!.<K\k{�������,9JYiy�������.9GXdx�������#.8M\j{�������-5?KYks�������	(8GXgw�������$09LWiv�������6GQ^h~�������/>Oas���������->N^o�������1>O\kw��������$-=L[ly�������-<L[k{�������+5FSgr�������#*:N]n}�������"2CScs��������)BIV_o��������%4?K\fw�������1ASdu���������4DXgu~��������/=LZjw��������#2=IVanw��������ɸ������wsqnmcb_OD420-+ 
 ������Ķ�����|nhZNLFE9-" ����������Ķ���D>B<HuUZv������         dffDD$"`�k�����f@B$""  Ћ�����h`�h�fff�     PmNk��ge�ԍ���{g$      0       D�{wwgEbDgxvvfGb��������Ш�K��yk 1""" ��{��i�b�h�d���dFDFBB"�@�fD$ ��fD""B�����kkWfd�}z�vg�r��i�j2"�֍���yg�"     �mJ�����fn�vWewe  $$BD#`�fd$ !���fdTdkxw$� ���� ����& ����9 ����E ���T ���V ���[ ���d �����������f\������SH������L!?�����yM+7������G+;������B2Bk����tL75}��d  (       
    	   [         f&���  ��  ط  ��  ��  @�  ��      0u  p   ��� ���  �������b:
��b"��B��:�r
�*�:�<�.�~�N�n�t�d��@��


J	��>x��"Z��   6�n������N�������:�v�����8�|����R����:�����8����P������`���J���D���L���d����(���j���p�$����`�(�������x�X�>�(��
�� �       
	 	              �����  ������     ���                      �   ��      � � �������������         �  � ��������          �  ��������    ��������������	����
�
���
����"      @  l"  B    M  �   �   �   I             @  �]  �p  �y  �}  $                          ID3      	8?61$#*-pw~ylkbeHOFATSZ]���������������͐������������������������������귰��������������' ).;<52
WPY^KLEBohafst}z��������������������������������ing`ur{|QV_XMJCD!&/(=:34NI@GRU\[vqxjmdc>907"%,+��������������������������������    �  �  
   �        �  3�  6   <   9�  (   -�  '�  "   c�  f   l   i�  x   }�  w�  r   P   U�  _�  Z   K�  N   D   A�  À  �   �   ɀ  �   ݀  ׀  �   �   ��  ��  �   �  �   �   �  �   ��  ��  �   ��  �   �   ��  ��  �   �   ��  �   ��  ��  �   ��  �  �  ��  �  ��  ��  �  �  ��  ��  �  ��  �  �  ��  �  �  �  �  ��  �  �  �  Ӂ  �  �  ف  �  ́  ǁ  �  @  E�  O�  J  [�  ^  T  Q�  s�  v  |  y�  h  m�  g�  b  #�  &  ,  )�  8  =�  7�  2    �  �    �      �  �      	�    �  �    0  5�  ?�  :  +�  .  $  !�  `  e�  o�  j  {�  ~  t  q�  S�  V  \  Y�  H  M�  G�  B  �  Ń  σ  �  ۃ  �  �  у  �  �  �  ��  �  �  �  �  ��  �  �  ��  �  ��  ��  �  �  ��  ��  �  ��  �  �  ��  �  ��  ��  �  ��  �  �  ��  ��  �  �  ��  �  ��  ��  �  �  �  �  �  �  ��  ��  �  �  Ղ  ߂  �  ˂  �  �  ��  C�  F  L  I�  X  ]�  W�  R  p  u�  �  z  k�  n  d  a�     %�  /�  *  ;�  >  4  1�  �      �    �  �    fLaC                                                     $               @       @              @                     @              `                     n                     @                                                                                                                                                                                          ��n;�	�&C�vkk��M�PG��&��"�֊/a�K+d�5ӆ�1
��<��O8p�L���H��E��RA��_��[�Vu�VR�6j+�n��cZg@y�]�}z{�p�f^t�#�W�✎���9�`�<�'����R�����d�X[+��F�6`���}h��-/�30����]l��m2�'p���V��IKq�L6����" �Ε=u�(�:���F����y���>�C���ͼ�-�}�wp�4�mG0K=�V�9��'C#�= .r �*ϝ�x�O�������K}������x��V|i�qލ�u�ݓkl�Ro��b��f�F�^[^Z�}Wf`�Sc0�M�-ZID��@�ƥ� �d���'�N��K�����`�%�#����/+���6l�A/����]��D@h��f+�*{����P u�&6�>;��;k��vq�UP2��M��_����}�1�>φ��˃���4�y���:�Z�����iY��m�ێ`7�Od2�z���~\��s�KwVO��K86�F�+GB�{ \=f�X�@�US]CQ�;%)&�!� �,G^(BM6�P�2,v�?�kZ;&����H�
��V��M�����#�RV/�K��`m���pl�� +�e=����hﶻ'����؀��o�d�j�#�������ͳ�`�~�>�ɐ�������}���:��������{�y��`6�q}���[��Fu�2���t-���0q����].�KY��T@��PE�N��OJ+�G���C!}�{�`COF r�[�v��hJGl�0a$-�e�K�^VZ�p0m�5=�� ^[��Q��7�R3?�>���:�З$:�V ��-T��)y&���;h�+̠ �ȥP��Ml��k/�|v���ˡ�v�`��#�������d�s�'�ě��	�����y�g�:�����Ջ��b�}���>�������q��+2�h6�mf���{u�]6��@��                                      : illegal option:       
       : option requires an argument:            �  �  �  �  �  �  �	  �
  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �   �  �  �  �  �  �  �  �  �	  �
  �  �  �  �  �  �  � � � � �                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ������������������������������������������������� 	�������
 !"#������
 !"#�������������������������������������������������������������������������������������������������������������������������������������                infinity        nan     _p� �	/
   d   �  '  �� @B ���  ��         
           	             

 	  	                               

 
   	   	                                               	                                                  	                                                   	                                              	                                              
    
    	                                                   	         -+   0X0x       (null)  -0X+0X 0X-0x+0x 0x      inf     INF     nan     NAN     0123456789ABCDEF.                                                                                 �����                                