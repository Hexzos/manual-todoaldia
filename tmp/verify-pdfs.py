import sys, pathlib
sys.path.insert(0,str(pathlib.Path('tmp/pdf-python').resolve()))
import pymupdf as fitz
out=pathlib.Path('tmp/pdfs');out.mkdir(exist_ok=True)
for slug,count in [('servicio',21),('operacion-diaria',16),('gestion',59)]:
    doc=fitz.open(f'output/pdf/primeros-pasos-{slug}.pdf')
    assert len(doc)==count,(slug,len(doc))
    for i,page in enumerate(doc):
        assert abs(page.rect.width-841.89)<2 and abs(page.rect.height-595.28)<2
        text=page.get_text()
        assert text.strip() and 'manual principal' not in text.lower(),(slug,i)
        assert f'{i+1:02d} / {count}' in text,(slug,i,'footer')
    for i in [0,count-1]:
        doc[i].get_pixmap(matrix=fitz.Matrix(1.2,1.2)).save(out/f'{slug}-{i+1}.png')
    assert 'Seguir explorando' in doc[-1].get_text()
    print(slug,len(doc),'pages, A4 landscape, text and numbering OK')

